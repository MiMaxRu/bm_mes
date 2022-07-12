import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsItems = props.posts.map(post => <Post message={post.message} likesCount={p.likesCount} />);

    return <div>My post
        <div><h3>Новый пост</h3>

            <textarea></textarea>
            <div>
                <button>Добавить</button>
                <button>Удалить</button>
            </div>
        </div>
        <div className={p.posts}>
            {postsItems}
        </div>
    </div>
}
export default MyPosts;