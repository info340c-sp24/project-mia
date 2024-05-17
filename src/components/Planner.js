export function Checklist(){
    return(
        <div className="checklist content">
            <div id="checkboxes">
            <label><h2>Checklist</h2></label>
            <div className="archive-loc-select">
                <select name="loc" id="loc-select">
                <option value="General">Choose where to save this planner</option>
                <option value="General">General</option>
                <option value="Favorite">Favorites</option>
                </select>
            </div>
            <ul aria-label="Checklist">
                <li><input type="checkbox"/>text</li>
            </ul>
            </div>
        </div>       
    );
}

export function Diary(){
    return(
        <div className="img-diary-note-content diary">
            <h2 className="content">Diary</h2>
            <p>text</p>
        </div>
    )
}

export function Image(props){
    console.log(props);
    return(
        <div className="img-diary-note-content image">
            <div className="img-center">
            <img src={props.imgURL.url} alt=""/>
            </div>
        </div>
    )
}

export function Note(){
    return(
        <section className="img-diary-note-content note">
            <h2 className="content">Note</h2>
            <p>text</p>
        </section>
    );
}