import React, { useContext } from 'react'
import { useLocation, Navigate, Route, Routes,  } from 'react-router-dom';
import {publicRoutes, privateRoutes} from "../router"
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const location = useLocation();
   
    const { isLoading, isAuth, setIsAuth } = useContext(AuthContext);
    
    console.log(isAuth)

    if(isLoading){
      
      
       return <Loader/>
    }

    return (
     
        isAuth
          ? <div>
            <Routes> 
            {privateRoutes.map(route =>
              <Route key={route.path} path={route.path} element={route.element} />
            )}
            </Routes> 
            </div>
            :
              <div>
              <Routes> 
            {publicRoutes.map(route =>
              <Route key={route.path} path={route.path} element={route.element} />
            )}
          
            </Routes> 

           
            
            {
              
              publicRoutes.some((route) => {
                return route.path === location.pathname || location.pathname === "/"
                
              })?  "" : <Navigate to="/login" /> 
            
            }
            </div>
              
        
           
          

         
          
          
        

         
         
        
    )
}

export default AppRouter