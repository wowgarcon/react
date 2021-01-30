import React, {useState, useRef} from 'react';
import CreateUser from './CreateUser';
import ModifyUser from './ModifyUser';
import RemoveUser from './RemoveUser';

const User = ({user, userList, setUserList, inputs, setInputs, changeToModifyState}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td><button onClick={()=>{changeToModifyState(user)}}>수정</button></td>
            <td><RemoveUser id={user.id} userList={userList} setUserList={setUserList}/></td>
        </tr>
    );
};

const UserList = () => {
    const [userList, setUserList] = useState([
            {
                id : 1,
                name : 'wow',
                age : 20,
                gender : 'male',
            },
            {
                id : 2,
                name : 'han',
                age : 35,
                gender : 'male',
            },
            {
                id : 3,
                name : 'taehu',
                age : 35,
                gender : 'female',
            }
        ]);

    const [inputs, setInputs] = useState({
        name : '',
        age : '',
        gender : '',
        modifyStatus : false,
    });

    //************** Inputs ref **************
    const nextId = useRef(3);
    const nameInput = useRef();
    const ageInput = useRef();
    const genderInput = useRef();
    const isModifyState = useRef(false);

    //************** Event functions **************
    const changeInput = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs, 
            [name] : value
        });
    };

    const changeToModifyState = (user) => {
        setInputs({...user});
        isModifyState.current = true;
    }

    //************** Rendering area **************
    return(
        <>
            <input type='text' name='name' placeholder='name' value={inputs.name} onChange={changeInput} ref={nameInput} />
            <input type='number' name='age' placeholder='age' min='0' value={inputs.age} onChange={changeInput} ref={ageInput} />
            <input type='text' name='gender' placeholder='gender' value={inputs.gender} onChange={changeInput} ref={genderInput} />
            {isModifyState.current ?
                <ModifyUser isModifyState={isModifyState} inputs={inputs} setInputs={setInputs} userList={userList} setUserList={setUserList}/>
                :
                <CreateUser nextId={nextId} inputs={inputs} setInputs={setInputs} userList={userList} setUserList={setUserList}/>
            }
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>gender</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => {
                        return <User
                                user={user}
                                userList={userList}
                                setUserList={setUserList}
                                inputs={inputs}
                                setInputs={setInputs}
                                changeToModifyState = {changeToModifyState}
                                key={user.id}
                                />
                    })}
                </tbody>
            </table>
        </>
    );
};

export default UserList;