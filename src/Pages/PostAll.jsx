import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostAll = ({ postLocation }) => {
  const [postData, setPostData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  //   console.log(postLocation);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  //   console.log(showMore);

  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto my-20">
      <h2 className="text-4xl text-center font-semibold mb-12">Feature post</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* {showMore ? 'true jony' : 'salman false'} */}
        {postLocation === "/post" ? (
          postData.map((posts) => (
            <PostCard posts={posts} key={posts.id}></PostCard>
          ))
        ) : (
          <>
            {showMore
              ? postData.map((posts) => (
                  <PostCard posts={posts} key={posts.id}></PostCard>
                ))
              : postData
                  .slice(0, 6)
                  .map((posts) => (
                    <PostCard posts={posts} key={posts.id}></PostCard>
                  ))}
          </>
        )}
      </div>
      <div className="text-center my-10">
        {postLocation === "/post" ? (
          ""
        ) : (
          <>
            {showMore ? (
              <button onClick={handleShowMore} className="btn btn-error">
                Less More
              </button>
            ) : (
              <button onClick={handleShowMore} className="btn btn-primary">
                Show More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PostAll;
