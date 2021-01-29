import React, {useState, useRef} from 'react';
import CreateUser from './CreateUser';
import ModifyUser from './ModifyUser';
import RemoveUser from './RemoveUser';

const User = ({user, userList, setUserList, inputs, setInputs}) => {

    const userBox = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();
    const key = user.id

    const toInput = () =>{
        setUserList(userList.map(user =>
            //user.id === key ? console.log(user.id) : user)
            user.id === key ? { ...user, modifyStatus: !user.modifyStatus } : user)
            )
        console.log(user.modifyStatus);
    }

    return (
        <tr ref={userBox}>
            <td>{user.id}</td>
            {user.modifyStatus ?
                <>
                <td><input ref={nameRef}/></td>
                <td><input ref={ageRef}/></td>
                <td><input ref={genderRef}/></td>
                </>
                :
                <>
                <td ref={nameRef}>{user.name}</td>
                <td ref={ageRef}>{user.age}</td>
                <td ref={genderRef}>{user.gender}</td>
                </>
            }
            <td><button onClick={toInput}>update</button></td>
            <td><ModifyUser inputs={inputs} setInputs={setInputs} userList={userList} setUserList={setUserList}/></td>
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
                modifyStatus : false,
            },
            {
                id : 2,
                name : 'han',
                age : 35,
                gender : 'male',
                modifyStatus : false,
            },
            {
                id : 3,
                name : 'taehu',
                age : 35,
                gender : 'female',
                modifyStatus : false,
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

    //************** Event functions **************
    const changeInput = (e) =>{
        const {name, value} = e.target;
        setInputs({
            ...inputs, 
            [name] : value
        });
        console.log(inputs);
    };


    //************** Rendering area **************
    return(
        <>
            <input type='text' name='name' placeholder='name' value={inputs.name} onChange={changeInput} ref={nameInput} />
            <input type='text' name='age' placeholder='age' value={inputs.age} onChange={changeInput} ref={ageInput} />
            <input type='text' name='gender' placeholder='gender' value={inputs.gender} onChange={changeInput} ref={genderInput} />
            <CreateUser nextId={nextId} inputs={inputs} setInputs={setInputs} userList={userList} setUserList={setUserList}/>
            
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
                                key={user.id}
                                />
                    })}
                </tbody>
            </table>
        </>
    );
};

export default UserList;