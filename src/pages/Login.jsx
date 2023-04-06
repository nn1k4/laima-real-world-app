
import React, { useContext  } from 'react'
import { useNavigate } from "react-router-dom";
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context';



const Login = () => {

    const navigate = useNavigate();
    const {isAuth, setIsAuth } = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true') 
        navigate("/");
    }
    return (
        <div>
            <h1>Authorization:</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter login"></MyInput>
                <MyInput type="password" placeholder="Enter password"></MyInput>
                <MyButton>Sign in</MyButton>
            </form>
        </div>
    )
}

export default Login