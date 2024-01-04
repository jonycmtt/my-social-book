import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PostDetails from "../Pages/PostDetails";
import Post from "../Pages/Post";
import Dashboard from "../Root/Dashboard/Dashboard";
import User from "../Pages/Dashboard/User";
import AddPost from "../Pages/Dashboard/AddPost";
import ControlPost from "../Pages/Dashboard/ControlPost";
import LogOut from "../Pages/Dashboard/LogOut";


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
                element :<PostDetails></PostDetails>,
                // loader : ({params}) => fetch(`post.json/${params.id}`)
            }
        ]
    },

    // dashboard
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children : [
            {
                path : 'user',
                element : <User></User>
            },
            {
                path : 'addPost',
                element : <AddPost></AddPost>
            },
            {
                path : 'control',
                element : <ControlPost></ControlPost>
            },
            {
                path : 'LogOut',
                element: <LogOut></LogOut>
            }
        ]
    }
])

export default router;
