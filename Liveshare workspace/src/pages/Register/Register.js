import "./Register.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {
    // Define state variables to store the user's details and the registration message
    const [firstName, setFirstName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            // If the passwords do not match, display an error message
            setMessage('Passwords do not match');
            return;
        }

        try {
            // Send a POST request to the registration API endpoint with the user's details
            const response = await axios.post('http://localhost:5000/api/register', { firstName, surname, username, password, confirmPassword });

            // If the registration is successful, update the registration message
            setMessage(response.data.message);
        } catch (error) {
            // If the registration fails, display an error message
            setMessage(error.response.data.message);
        }
        navigate('/');
    };

    return (
        <body className="container">
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"></link>
            <script src="https://kit.fontawesome.com/29763fc397.js" crossorigin="anonymous"></script>

            <div class="signUp" >
                <h3 className="h3h3">Welcome to Ziphon</h3>
                <p id="tagline">Create your new account</p>
                <form onSubmit={handleSubmit}>
                    <div class="input-icons">
                        <i class="fa fa-user icon"></i>
                        <input class="inputfield2"
                            type="text"
                            id="firstName"
                            value={firstName}
                            placeholder="First Name" required
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div><br></br>
                    <div class="input-icons">
                        <i class="fa fa-user icon"></i>
                        <input class="inputfield2"
                            type="text"
                            id="surname"
                            value={surname}
                            placeholder="Surname" required
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    </div><br></br>
                    <div class="input-icons">
                        <i class="fa-solid fa-envelope icon"></i>
                        <input class="inputfield2"
                            type="text"
                            id="username"
                            value={username}
                            placeholder="Username" required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div><br></br>
                    <div class="input-icons">
                        <i class="fa-solid fa-key icon"></i>
                        <input class="inputfield2"
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Password" required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div><br></br>
                    <div class="input-icons">
                        <i class="fa-solid fa-key icon"></i>
                        <input class="inputfield2"
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password" required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div><br></br>
                    <button type="submit" class="signUpBtn">Sign Up</button>
                    {message && <p>{message}</p>}
                    {/* {console.log('data:', { username, password, confirmPassword })} */}
                </form>
                <a href="/">
                <p className="logins">Login</p>
              </a>
            </div>
            <div class="slant"></div>
            <div class="APIbox">
                <h1 className="h1h1"><span className="span5">Or</span></h1>

                <div class="btn-icons">
                    <i class="fa-brands fa-google btn_Icon"></i>
                    <button class="signUpApi" id="googleApi">Sign up with Google</button>
                </div><br></br>

                <br></br><div class="btn-icons">
                    <i class="fa-brands fa-apple btn_Icon" id="appleIcon"></i>
                    <button class="signUpApi" id="appleApi">Sign up with Apple</button>
                </div>
            </div>
        </body>
    );
}

export default Registration;
