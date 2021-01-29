import React from 'react';

const ModifyUser = ({inputs, setInputs, userList, setUserList}) => {
    const modifyUser = () => {
        setUserList({
            ...inputs,
        });
    };

    return(
            <button onClick={modifyUser}>수정</button>
    );
};

export default ModifyUser;