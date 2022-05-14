import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSignIn(e) {
    e.preventDefault();

    const userData = await signIn(email, password);
    console.log(userData, 'user');

    setUser(userData);
  }


  async function handleSignUp(e) {
    e.preventDefault();

    const userData = await signUp(email, password);

    setUser(userData);
  }


  return (
    <div className='auth'>
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <label>
          Email
          <input required onChange={e => setEmail(e.target.value)} name="email" type="email" />
        </label>
        <label>
          Password
          <input required onChange={e => setPassword(e.target.value)} name="password" type="password" />
        </label>
        <button>Sign In</button>
      </form>

      <form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <label>
          Email
          <input required onChange={e => setEmail(e.target.value)} name="email" type="email" />
        </label>
        <label>
          Password
          <input required onChange={e => setPassword(e.target.value)} name="password" type="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
