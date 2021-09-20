import React, {useState, useEffect} from "react";

import PostExcerpt from './PostExcerpt';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
  	fetch('https://jsonplaceholder.typicode.com/posts')
  	.then(response => response.json())
  	.then(postsData => setPosts(postsData));
  }, 
  	[]);
  return (
    <div className="row">
      <div className="col text-center">
        <h1>All knowlegde forum</h1>
      </div>
      <div className="row">
      	{posts.map(p=><PostExcerpt key={p.id} postData={p}/>)}
      </div>
    </div>
  );
};

export default Forum;
