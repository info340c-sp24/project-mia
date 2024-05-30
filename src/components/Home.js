import Tabs from "./Tabs.js"
import {Checklist, Diary, Image, Note} from "./Planner.js";
export default function Home(){
    let images = [
        {url: 'img/flower.jpg'},
        {url: 'img/cherry_blossom_tree.jpg'},
        {url: 'img/cupcake.jpg'}
    ]
    return(
        <div>
            <Tabs/>
            <div className="home">
            <header>
                <h1>Daily Planner </h1>
            </header>

            <div className="icon">
                <img src="img/planner_icon.png" alt="planner icon"/>
            </div>
            
            <main>
                <div className="home-flexbox">
                    <Checklist/>
    
                <div className="img-diary-note-flex-container">

                    <div className="img-diary-note-flex-top">
                        <Image imgURL={images[0]}/>
                        <Image imgURL={images[1]}/>
                        <Note/>
                        </div>
                        <div className="img-diary-note-flex-bottom">
                            <Image imgURL={images[2]}/>
                            <Diary/>
                        </div>
                    </div>
                </div>
            </main>
            </div>
            
            <footer>
            <div className="home-footer">
                <p>Website designed and developed by Mia Sohn</p>
                <p>&copy; Mia Sohn 2024</p>
                </div>
            </footer>
        </div>
    );
}