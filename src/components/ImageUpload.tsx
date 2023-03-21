import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    list(ref(storage, 'images/'), { maxResults: 20 }).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if (!imageList.includes(url)) setImageList((prev) => [...prev, url]);
        });
      });
    })
  }, [imageList, storage]);

  const uploadImage = () => {
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
  }

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
      <div className='imageUploadBottom'>
        {Array.from(new Set(imageList)).map((url, id) => <img className='imgUpload' src={url} alt='memory snapshot' key={url + id}/>)}
      </div>
    </div>
  );
}

export default ImageUpload;
