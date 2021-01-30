import React from 'react';

const ModifyUser = ({isModifyState, inputs, setInputs, userList, setUserList}) => {

    const changeToCreateState = () => {
        setInputs({
            name : '',
            age : '',
            gender : '',
        });
        isModifyState.current = false;
        console.log(isModifyState.current);
    }

    const modifyUser = () => {
        const modifiedUserList = userList.concat();
        modifiedUserList.forEach((user, index) => {
            if(user.id === inputs.id){
                modifiedUserList[index] = {...inputs};
            }
        });
        setUserList(modifiedUserList);
        setInputs({
            name : '',
            age : '',
            gender : '',
        });
        isModifyState.current = false;
    };

    return(
        <>
            <button onClick={changeToCreateState}>취소</button>
            <button onClick={modifyUser}>완료</button>
        </>
    );
};

export default ModifyUser;