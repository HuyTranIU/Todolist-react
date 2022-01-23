import React from 'react';
import { useState, useEffect } from 'react'

function PreviewAvatar(props) {
    const [avatar, setAvatar] = useState()
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }


    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && 
            <>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
            </>
            }
        </div>
    );
}

export default PreviewAvatar;