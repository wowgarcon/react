import React from 'react';

const RemoveUser = ({id, userList, setUserList}) => {
    const removeUser = () => {
        setUserList(userList.filter((user) => user.id !== id));
    };

    return(
            <button onClick={removeUser}>삭제</button>
    );
};

export default RemoveUser;