// Filename - App.js
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home.js"
import Archive from "./Archive.js"
import Archive_Fav from "./Archive_Fav.js"
import Archive_Gen from "./Archive_Gen.js"
import Profile from "./Profile.js"
import Account from"./Account.js"
 
function App() {
    let componentToRender = null;
    return (
        <div>
            {<Home/>}
            {/* {<Archive/>} */}
            {/* {<Archive_Fav/>} */}
            {/* {<Archive_Gen/>} */}
            {/* {<Profile/>} */}
            {/* {<Account/>} */}
        </div>
        
        // <Routes>
        //     <Route path = "index.html" element={<Home/>}/>
        //     <Route path = "archive.html" element={<Archive/>}/>
        //         <Route path = "archive-fav" element={<Archive_Fav/>}/>
        //         <Route path = "archive-gen" element={<Archive_Gen/>}/>
        //     <Route path = "profile" element={<Profile/>}/>
        //     <Route path = "account" element={<Account/>}/>
        // </Routes>
    );
}
export default App;