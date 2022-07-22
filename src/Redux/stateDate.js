
import { renderEntireTree } from '../render';
let stateData = {
    dialogPage:{
        dialogsData:[
            { id: 1, name: "Мария" },
            { id: 2, name: "Даша" },
            { id: 3, name: "Коля" },
            { id: 4, name: "Юра" },
            { id: 5, name: "Иван" },
            { id: 6, name: "Максим" },
            { id: 7, name: "Кирилл" }
    ],
    messageData:[
        { id: 1, message: "Привет" },
        { id: 2, message: "Как дела?" },
        { id: 3, message: "Как жизнь" },
        { id: 4, message: "Отлично!" },
        { id: 5, message: "Отлично!" },
        { id: 6, message: "Отлично!" },
        { id: 7, message: "Отлично!" },
    ]
    },
    profilePage:{
    posts:[
        { id: 1, message: 'Я Вова', likesCount: 32 },
        { id: 2, message: 'Я люблю гонаять на гелике', likesCount: 15 },
        { id: 3, message: 'А ещё люблю ездить на нём на рыбалку', likesCount: 22 }
    ]
 }

}

export let addPost = (postMessage)=>{
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    }
    stateData.profilePage.posts.push(newPost);
    renderEntireTree(stateData);
}
export default stateData;