import React, {useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
  const {isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () =>{
    setIsAuth(false);
    localStorage.removeItem('auth')
    
  }
  const navigate = useNavigate();
    return (
    <div className='navbar'>

    {isAuth? <MyButton onClick={()=> {
        
        logout()
       
     }
     
     }>Exit</MyButton>
     :
     <div></div>}

        <div className='navbar__links'>
          <Link to="/">Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/posts'>Posts</Link>
        </div>
      </div>
    )
}

export default Navbar