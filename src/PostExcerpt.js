import React from 'react';
import {Link} from 'react-router-dom';

const PostExcerpt = (props) => {
	  console.log(props);
	return (
		<Link to={`/forum/${props.postData.id}`}>
		<div className="card mb-3" style={{"maxWidth": "540px"}}>
		  <div className="row g-0">
		    <div className="col-md-4">
		      <img src={props.thumbnail.thumbnailUrl} className="img-fluid rounded-start" alt="..."/>
		    </div>
		    <div className="col-md-8">
		      <div className="card-body">
		        <h5 className="card-title">{props.postData.title}</h5>
		        <p className="card-text"><small className="text-muted">Written by {props.postData.userId}</small></p>
		      </div>
		    </div>
		  </div>
		</div>
		</Link>
	);
}

export default PostExcerpt;