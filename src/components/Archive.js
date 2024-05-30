import { Link } from "react-router-dom";
import Tabs from "./Tabs.js"
export default function Archive(){
    return(
        <div>
            <Tabs/>
            <div class="archive">
            <header>
            <h1>Archived Planners</h1>
            </header>          
            <main class="archive">
            <div class="archive-gen-box">
                <Link to="/archive_gen">
                <img src="img/folder_icon.png" alt="folder-icon"/>
                </Link>
                <Link to="/archive_gen">
                <h2>Archived Planners - General</h2>
                </Link>
            </div>

            <div class="archive-fav-box">
                <Link to="/archive_fav">
                <img src="img/folder_icon.png" alt="folder-icon"/>
                </Link>
                <Link to="/archive_fav">
                <h2>Archived Planners - Favorites</h2>
                </Link>
            </div>
            </main>
        </div>
        
        <footer class="archive-footer">
            <div class="container">
            <p>Website designed and developed by Mia Sohn</p>
            <p>&copy; Mia Sohn 2024</p>
            </div>
        </footer>
        </div>
    );
}