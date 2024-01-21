import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        geolocation: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!credentials.name || !credentials.email || !credentials.password || !credentials.geolocation) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.geolocation
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                alert('Enter valid credentials');
            }
        } catch (error) {
            console.error('Error during fetch:', error);
            alert('An error occurred. Please try again.');
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <>
        <Navbar/>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
                        <input type="email" name='email' value={credentials.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
                        <input type="password" name='password' value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address:</label>
                        <input type="text" name='geolocation' value={credentials.geolocation} onChange={onChange} className="form-control" id="exampleInputPassword31" />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already User</Link>
                </form>
            </div>
        </>
    )
}





















// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//     const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:5000/api/createuser", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
//         });
//         const json = await response.json()
//         console.log(json);

//         if (!json.success) {
//             alert('Enter valid credentials');
//         }
//     }

//     const onChange = (event) => {
//         setCredentials({ ...credentials, [event.target.name]: event.target.value })
//     }

//     return (
//         <>
//             <div className='container'>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="name" className="form-label">Name:</label>
//                         <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
//                         <input type="email" name='email' value={credentials.email} onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
//                         <input type="password" name='password' value={credentials.password} onChange={onChange} className="form-control" id="exampleInputPassword1" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputPassword1" className="form-label">Address:</label>
//                         <input type="text" name='geolocation' value={credentials.geolocation} onChange={onChange} className="form-control" id="exampleInputPassword31" />
//                     </div>
//                     <button type="submit" className=" m-3 btn btn-success">Submit</button>
//                     <Link to="/login" className='m-3 btn btn-danger'>Already User</Link>
//                 </form>
//             </div>
//         </>
//     )
// }
