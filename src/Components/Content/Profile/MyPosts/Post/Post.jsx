import React from 'react';
import pos from './Post.module.css';

const Post = (props)=>{
  return (
      <div className={pos.item}>
        <img src = 'https://a.d-cd.net/1a424f2s-960.jpg'></img>
        <span>{props.message}</span>
        <div><button onClick={like}></button></div>
  </div>
      )
}

function like(){
  alert("Вы поставили лайк!");
}

export default Post;