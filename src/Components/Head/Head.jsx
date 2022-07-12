import React from "react";
import head from './Head.module.css';
import Logo from "./Logo/Logo";
function Head(){
    return <header className={head.header}>
{/* <img src='https://logowiki.net/wp-content/uploads/imgp/rize-Logo-1-9150.jpg'></img> */}
<div><Logo/></div>


</header>
}

export default Head;