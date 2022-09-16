import React from 'react';

// Local Imports
import Particle from '../components/Particle';
import '../assets/auth.scss';
import img from '../assets/avataaars (1).png';
export default function Register() {
  return (
    <div className='auth__container'>
      <Particle />
      <div className='login__container'>
        <div className='left'>
          <div className='header'>Alyeska</div>
          <p>Create your own venting space.</p>
          <div className='form__container'>
            <input type='text' placeholder='Enter your name' />
            <input type='email' placeholder='Enter your email' />
            <input type='password' placeholder='Enter your password' />

            <button>Create</button>
          </div>
          <a href='/'>Already have a space?</a>
        </div>
        <div className='right'>
          <img src={img} alt='' />
        </div>
      </div>
    </div>
  );
}
