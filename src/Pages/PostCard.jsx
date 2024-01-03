import { Link } from "react-router-dom";

const PostCard = ({posts}) => {
    const {id,userName,userEmail,post,date, like,comment} = posts;

  return (
    <div className="card bg-base-100 shadow-xl border">
      {/* <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">
          {userName}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p className="text-xs">{date}</p>
        <p>{post}</p>
        <div className="card-actions justify-center my-5">
          <div className="badge badge-outline bg-info text-black">Like : {like}</div>
          <div className="badge badge-outline bg-primary text-black">Comment : {comment}</div>
        </div>
        <div className="text-center">
            <Link to={`/postDetails/${id}`}>
            <button className="btn btn-success btn-sm">Show Post</button>
            </Link>
            
        </div>
      </div>
    </div>
  );
};

export default PostCard;
