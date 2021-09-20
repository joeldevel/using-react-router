import React, {useState, useEffect} from "react";

import PostExcerpt from './PostExcerpt';

const Forum = () => {
  const [posts, setPosts] = useState(null);
  const [thumbnails, setThumbnails] = useState(null);

useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const url2 = "https://jsonplaceholder.typicode.com/photos"
    
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchData2 = async () => {
      try {
        const response = await fetch(url2);
        const json = await response.json();
        setThumbnails(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    fetchData2();
}, []);

  return (
    <div className="row">
      <div className="col text-center mb-4">
        <h1>All knowlegde forum</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
         {
            (posts && thumbnails) ? posts.map(p=><PostExcerpt postData={p} thumbnail={thumbnails[p.id]}/>) : <h1> Loading </h1>
         }
        </div>
          
      </div>
    </div>
  );
};

export default Forum;
