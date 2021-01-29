import React from 'react';

const CreateUser = ({nextId, inputs, setInputs, userList, setUserList}) => {
    const createUser = () => {
        nextId.current += 1;
        const newUser = {
            id: nextId.current,
            ...inputs
        }
        //user.push(newUser)는 원래 배열을 수정하기에 사용하면 에러남.
        setUserList(userList.concat(newUser));
        //input창 비우기
        setInputs({
            name: '',
            age: '',
            gender: ''
        });
    };

    return(
        <button onClick={createUser}>등록</button>
    );
};

export default CreateUser;