import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom";
import {auth} from './firebase';
import {createUserWithEmailAndPassword} from "firebase/auth"
import {signInWithEmailAndPassword} from "firebase/auth"

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // Firebase code
        signInWithEmailAndPassword(auth,email,password)
        .then(auth => {
            history.push('/');
        })
        .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();

        //Firebase code
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='Amazon logo'/>
      </Link>

        <div className='login__container'>
            <h1> Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button className='login__signInButton' onClick={signIn} type='submit'>
                    Sign In
                </button>

            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button className='login__registerButton' onClick={register}>Create your account</button>
        </div>


    </div>
  )
}

export default Login
