import React, { useState, useEffect, useRef } from 'react';
import './ImageUpload.css';
import { FirebaseStorage, ref, uploadBytes, list, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { getTimestamp } from '../utils';

type ImageUploadProps = {
  storage: FirebaseStorage;
}

const ImageUpload = ({ storage }: ImageUploadProps) => {
  const [imageUpload, setImageUpload] = useState<File|null>(null);
  const [imageList, setImageList] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  //picture collage on hover gameplan:
    //only want to track cursor/pointer x and y when inside collage container (className=imageUploadBottom)
    //pin the lead image to the x,y position (cursor) and fade the tail images out as a trail left behind the lead/active image
  
  //track index changing without rendering with useRef hook
  const leadIndexRef = useRef(0);
  const leadXYRef = useRef([0, 0]);

  //grab uploaded images out of DOM tree to dynamically style with mouse movement
  const imagesFromDOM = Array.from(document.getElementsByClassName('imgUpload')) as HTMLElement[];

  //activate/show images dynamically handler
  const activateImg = (leadImg: HTMLElement, x: number, y: number): void => {
    leadImg.style.left = `${x}px`;
    leadImg.style.top = `${y}px`;
    leadImg.style.opacity = '1.0';
    // leadImg.style.display = 'flex';
  };
  
  const deactivateImg = (tailImg: HTMLElement): void => {
    tailImg.style.opacity = `${(Math.random() * 0.5) + 0.1}`;
    // tailImg.style.display = 'none';
  };

  useEffect(() => {
    list(ref(storage, 'images/'), { maxResults: 20 }).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if (!imageList.includes(url)) setImageList((prev) => [...prev, url]);
        });
      });
    })
  }, [imageList, storage]);

  const uploadImage = (): void => {
    if (!imageUpload) return;
    const imageRef = ref(storage, `images/${getTimestamp(new Date())}_${v4()}`);
    if (imageRef && imageUpload) {
      uploadBytes(imageRef, imageUpload).then(() => {
        setIsUploading(() => false);
        alert('successfully uploaded image');
      });
    }
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    const file = files?.length ? files[0] : null;
    setImageUpload(file);
  };

  const imgUrls = Array.from(new Set(imageList));

  return (
    <div className='imageUploadWrapper'>
      <div className='imageUploadTop'>
        <input
          type='file'
          onChange={handleChange}
          accept='image/*'
        />
        <button onClick={() => {
          uploadImage();
          setIsUploading(true);
        }} disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      <div className='imageUploadBottom'
        onMouseMoveCapture={(e) => {
          const [prevX, prevY] = leadXYRef.current;
          const [curX, curY] = [e.clientX, e.clientY];
          //perform position and render changes after x,y moves 100px
          if (Math.hypot(curX - prevX, curY - prevY) > 100) {
            //%wraps index around so lead img index cycles
            const lead = imagesFromDOM[leadIndexRef.current % imagesFromDOM.length];
            activateImg(lead, e.clientX, e.clientY);

            //leave a trail of images behind lead/cursor image
            const tail = imagesFromDOM[(leadIndexRef.current - 1) % imagesFromDOM.length];
            if (tail) deactivateImg(tail);

            //update ref pointers, useRef avoids ▲state-based re-renders
            leadIndexRef.current += 1;
            leadXYRef.current = [ curX, curY ];
          }
        }}
        onMouseLeave={(e) => {
          imagesFromDOM.forEach(img => {
            img.style.display = 'flex';
            img.style.opacity = '1.0';
          });
        }}
      >
        {imgUrls.map((url, id) => <img className='imgUpload' src={url} alt='memory snapshot' key={url + id}/>)}
      </div>
    </div>
  );
}

export default ImageUpload;
