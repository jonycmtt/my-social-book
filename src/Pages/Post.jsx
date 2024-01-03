import { useLocation } from "react-router-dom";
import PostAll from "./PostAll";


const Post = () => {
    const location = useLocation()

    const postLocation = location.pathname;
    return (
        <div>
            <PostAll postLocation={postLocation}></PostAll>
        </div>
    );
};

export default Post;