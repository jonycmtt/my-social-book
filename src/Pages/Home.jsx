import { useLocation } from "react-router-dom";
import Banner from "./Banner";
import PostAll from "./PostAll";
import Qna from "./Qna";

const Home = () => {
    const location = useLocation();
    console.log(location.pathname , 'is home page');
    return (
        <div>
         <Banner></Banner>
         <PostAll></PostAll>
         <Qna></Qna>
        </div>
    );
};

export default Home;