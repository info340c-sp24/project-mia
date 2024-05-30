import Tabs from "./Tabs.js"
import Date_Select from "./Date_Select.js";
export default function Archive_Fav(){
    return(
        <div>
            <Tabs/>
            <div class="archive">
            <header>
            <h1>Archived Planners - Favorites</h1>
            </header>          
            <main class="archive">
                <Date_Select/>
                <div class="home-flexbox">

                    <div class="checklist content">
                        <div id="checkboxes">
                            <label><h2>Checklist</h2></label>
                            <ul>
                            <li><input type="checkbox"/>text</li>
                            </ul>
                        </div>
                    </div>

                    <div class="img-diary-note-flex-container">

                        <div class="img-diary-note-flex-top">
                        <section class="img-diary-note-content image">
                            <div class="img-center">
                            <img src="img/flower.jpg" alt="flower"/>
                            </div>
                        </section>
                        <section class="img-diary-note-content image">
                            <div class="img-center">
                            <img src="img/cherry_blossom_tree.jpg" alt="flower"/>
                            </div>
                        </section>
                        <section class="img-diary-note-content note">
                            <h2 class="content">Note</h2>
                            <p>text</p>
                        </section>
                        </div>
                        
                        <div class="img-diary-note-flex-bottom">
                        <section class="img-diary-note-content image">
                            <div class="img-center">
                            <img src="img/cupcake.jpg" alt="flower"/>
                            </div>
                        </section>
                        <section class="img-diary-note-content diary">
                            <h2 class="content">Diary</h2>
                            <p>text</p>
                        </section>
                        </div>
                    </div>
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