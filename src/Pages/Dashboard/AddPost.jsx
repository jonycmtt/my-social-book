const AddPost = () => {
  return (
   <div>
    <h2 className="text-2xl font-bold">Add Post</h2>
     <div className="max-w-4xl mx-auto">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Post title</span>
          </label>
          <input
            type="text"
            placeholder="Post Title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Post Date</span>
          </label>
          <input
            type="date"
            
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Post</button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default AddPost;
