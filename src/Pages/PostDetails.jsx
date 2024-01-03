import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [dataAll, setData] = useState([]);
  const [singleData,setSingleData] = useState()
  const { id } = useParams(); // is react router hook
  const idx = parseFloat(id)
//   console.log(typeof id);

  useEffect(() => {
    fetch("/post.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

     console.log(dataAll);

  useEffect(() => {
    const findData = dataAll.find((data) => data.id === idx);
    setSingleData(findData)
  },[dataAll,idx])
 

     console.log(singleData);
//   const { userName, userEmail, post, date, like, comment } = findData;

  return (
    <div className="max-w-4xl mx-auto my-20">
      <div className="card bg-base-100 shadow-xl border">
        {/* <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure> */}
        <div className="card-body">
          <h2 className="card-title">
            {singleData?.userName}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p className="text-xs">{singleData?.userEmail}</p>
          <p className="text-xs">{singleData?.date}</p>
          <p>{singleData?.post}</p>
          <div className="card-actions justify-center my-5">
            <div className="badge badge-outline bg-info text-black">
              Like : {singleData?.like}
            </div>
            <div className="badge badge-outline bg-primary text-black">
              Comment : {singleData?.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
