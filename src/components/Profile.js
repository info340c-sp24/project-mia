import { Link } from "react-router-dom";
import Tabs from "./Tabs.js"
export default function Profile(){
    return(
        <div>
            <Tabs/>
            <div class="profile">
                <header>
                <h1 class="profile-title">Daily Planner</h1>
                </header>   

                <main class="profile-login">
                    <div class="login-box">
                        <h2>Login</h2>
                        <form action="">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your Username"/>
            
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password"/>
            
                        <div class="wrap">
                            <button aria-label="Submit" type="submit">Submit</button>
                        </div>
                        </form>
                        <p>Not registered? 
                        <Link to="/account">Create an account</Link>
                        </p>
                    </div>
                </main>
            </div>

            <footer class="profile-footer">
                <div class="container">
                <p>Website designed and developed by Mia Sohn</p>
                <p>&copy; Mia Sohn 2024</p>
                </div>
            </footer>
        </div>
    );
}