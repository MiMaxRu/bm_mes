import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsItems = props.posts.map(post => <Post message={post.message} likesCount={p.likesCount} />);
    let newPostElement = React.createRef();
    let addPost = ()=>{
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return <div>My post
        <div><h3>Новый пост</h3>

            <textarea ref = {newPostElement}></textarea>
            <div>
                <button onClick={addPost}>Добавить</button>
                <button>Удалить</button>
            </div>
        </div>
        <div className={p.posts}>
            {postsItems}
        </div>
    </div>
}
export default MyPosts;