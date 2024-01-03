import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PostDetails from "../Pages/PostDetails";
import Post from "../Pages/Post";


const router = createBrowserRouter([
    // main route
    {
        path: "/",
        element : <Root></Root>,
        errorElement : <h2>This page is not found</h2>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'post',
                element : <Post></Post>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'register',
                element : <Register></Register>
            },
            
            {
                path : 'postDetails/:id',
                element : <PostDetails></PostDetails>,
                // loader : ({params}) => fetch(`post.json/${params.id}`)
            }
        ]
    }
])

export default router;
