import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Profile = (props) => {
	const [postContent, setPostContent] = useState({});

	useEffect(()=> {
		const postId = props.match.params.id;
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(response => response.json())
		.then(postData => setPostContent(postData));
	}, []);

	return (
		<>
		<Link to="/forum">Go back to forum</Link>
		<div className="card">
			<h1>this is post {postContent.id}</h1>
			<p>{postContent.title}</p>
			<p>{postContent.body}</p>
		</div>
		</>	
	);
}

export default Profile;