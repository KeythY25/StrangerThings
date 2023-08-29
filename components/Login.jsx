import { useState, useEffect } from "react"
import "./Login.css"

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErr] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }


    async function handleSubmit(event){
        event.preventDefault();
        try{
            const COHORT_NAME = '2209-FTB-ET-WEB-FT'
            const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
            const resp = await fetch(BASE_URL + `/test/me`, {
                method: 'GET',
                header: {
                    'Content-Type': 'application/json',
                
                },
            });

            if(!resp.ok){
                throw new Error('Network response was not ok');
            }

            const data = await resp.json();
            console.log('Login successful!', data);
            console.log('Username:', username)
            console.log('Password:', password);
            // Reset the form fields
            setUsername('');
            setPassword('');
            
        } catch (error){
            setErr(error.message);
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>LOG IN</h2>
            <div>
                <input 
                    value={username}
                    id="username"
                    type="text"
                    placeholder="Username *"
                    onChange={handleUsernameChange}
                    required
                />
            </div>
           
           <div>
                <input 
                    value={password}
                    placeholder="Password *"
                    type="password"
                    id="password"
                    onChange={handlePasswordChange}
                    required
                />
           </div>
            
            <button type="submit">LOG IN</button>
            <h4>Don't have an account? Sign Up</h4>
        </form>
        </div>
        
    )

}

export default Login