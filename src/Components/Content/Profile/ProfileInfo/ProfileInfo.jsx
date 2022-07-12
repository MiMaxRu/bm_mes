import React from 'react';

import p from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={p.im} src='#'></img>
            </div>
            <div>
                ava + description
            </div>

        </div >)
}
export default ProfileInfo;