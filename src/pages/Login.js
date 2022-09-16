import React from 'react';
// Local Imports
import Particle from '../components/Particle';
import '../assets/auth.scss';
import img from '../assets/avataaars (1).png';

export default function Login() {
  return (
    <div className='auth__container'>
      <Particle />
      <div className='login__container'>
        <div className='left'>
          <div className='header'>Alyeska</div>
          <p>Create your own venting space.</p>
          <div className='form__container'>
            <input type='email' placeholder='Enter your email' />
            <input type='password' placeholder='Enter your password' />

            <button>Join</button>
          </div>
          <a href='/register'>Don't have an account yet?</a>
        </div>
        <div className='right'>
          <img src={img} alt='' />
        </div>
      </div>
    </div>
  );
}
