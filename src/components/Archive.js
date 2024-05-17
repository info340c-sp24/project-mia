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
                <a href="archive_gen.html">
                <img src="img/folder_icon.png" alt="folder-icon"/>
                </a>
                <a href="archive_gen.html">
                <h2>Archived Planners - General</h2>
                </a>
            </div>

            <div class="archive-fav-box">
                <a href="archive_fav.html">
                <img src="img/folder_icon.png" alt="folder-icon"/>
                </a>
                <a href="archive_fav.html">
                <h2>Archived Planners - Favorites</h2>
                </a>
                <a href="index.html"></a>
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