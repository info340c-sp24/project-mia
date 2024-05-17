import { Link } from "react-router-dom";

export default function Tabs(){
    return(
        <ul class="tabs">
            <li class="home-tab"><Link to="/home">Daily Planner</Link></li>
            <li class="archive-tab"><Link to="/archive">Archived Planners</Link></li>
            <li class="profile-tab"><Link to="/profile">Profile</Link></li>
        </ul>
    );
}