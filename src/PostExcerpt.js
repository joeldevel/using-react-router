import React from 'react';

const PostExcerpt = (props) => {
	return (
		<div className="card">
			<p>Written by {props.postData.userId}</p>
			<h2>{props.postData.title}</h2>
		</div>
	);
}

export default PostExcerpt;