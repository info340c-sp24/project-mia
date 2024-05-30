import Tabs from "./Tabs.js"
export default function Account(){
    return(
        <div>
            <Tabs/>
            <div class="account">
                <header>
                <h1 class="account-title">Daily Planner</h1>
                </header>   
                <main class="account-create">
                    <div class="create-box">
                        <h2>Create Account</h2>
                        <form action="">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter your Username"/>
            
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password"/>
            
                        <div class="wrap">
                            <button aria-label="Submit" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </main>
            </div>
            
            <footer class="account-footer">
                <div class="container">
                    <p>Website designed and developed by Mia Sohn</p>
                    <p>&copy; Mia Sohn 2024</p>
                </div>
            </footer>
        </div>
    );
}