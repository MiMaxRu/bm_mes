import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import d from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {
    let dialogItems = props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} />);
    let messageItems = props.state.messageData.map(m => <Message message={m.message} />);
    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {dialogItems}
            </div>
            <div className={d.messageItems}>
                {messageItems}
            </div>
        </div>
    );
}


export default Dialogs;