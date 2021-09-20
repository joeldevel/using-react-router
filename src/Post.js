import React, {useState, useEffect} from 'react';

const Profile = (props) => {
	const [postContent, setPostContent] = useState({});

	useEffect(()=> {
		const postId = props.match.params.id;
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(response => response.json())
		.then(postData => setPostContent(postData));
	}, []);

	//console.log(props.match.params.id);
	return (
		<div className="card">
			<h1>this is post {postContent.id}</h1>
			<p>{postContent.title}</p>
			<p>{postContent.text}</p>
		</div>	
	);
}

export default Profile;