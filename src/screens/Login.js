import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();

      if (!json.success) {
        setError('Invalid credentials');
      } else {
        setError('');
        // Handle successful login (e.g., save token, redirect)
        navigate('/');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;











// import React,{useState} from 'react'
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';


// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     // name: "",
//     email: "",
//     password: ""
//     // geolocation: ""
// });

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation
//     if ( !credentials.email || !credentials.password ) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     try {
//         const response = await fetch("http://localhost:5000/api/createuser", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 // name: credentials.name,
//                 email: credentials.email,
//                 password: credentials.password,
//                 // location: credentials.geolocation
//             })
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const json = await response.json();
//         console.log(json);

//         if (!json.success) {
//             alert('Enter valid credentials');
//         }
//     } catch (error) {
//         console.error('Error during fetch:', error);
//         alert('An error occurred. Please try again.');
//     }
// }

// const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
// }

//   return (
//     <>
//     <Navbar/>
//       <div className='container'>
//                 <form onSubmit={handleSubmit}>
                    
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
//                         <input type="email" name='email' value={credentials.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
//                         <input type="password" name='password' value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <button type="submit" className="m-3 btn btn-success">Submit</button>
//                     <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
//                 </form>
//             </div>
//     </>
//   )
// }

// export default Login
