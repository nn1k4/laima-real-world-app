
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'
import Error from '../pages/Error'
import Login from '../pages/Login'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const privateRoutes = [
    {path: '/about', element: <About/> },
    {path: '/', element: <Posts/> },
    {path: '/posts', element: <Posts/> },
    {path: '/posts/:id', element: <PostIdPage/> },
    {path: '/error', element: <Error/>},
    {path: '*', element: <Error/> },
  

]



export const publicRoutes = [
    {path: '/about', element: <About/> },
    {path: '/login', element: <Login/> },
    {path: '/', element: <div>To view posts <Link to="/login">Log in</Link></div> },
   
    
]


