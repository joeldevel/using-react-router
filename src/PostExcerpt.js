import React from 'react';
import {Link} from 'react-router-dom';

const PostExcerpt = (props) => {
	return (
		<Link to={`/forum/${props.postData.id}`}>
		<div className="card">
			<p>Written by {props.postData.userId}</p>
			<h2>{props.postData.title}</h2>
		</div>
		</Link>
	);
}

export default PostExcerpt;