import React, {useState, useEffect} from 'react';

const User = ({user}) => {
    return (
        <div>
            <b>{user.name}</b> <span>{user.age}세</span> <span>{user.gender}</span>
        </div>
    );
};

const UserList = () => {
    const {users, setUsers} = useState(null);

    useEffect(()=>{
        const user = [
            {
                name : 'wow',
                age : 20,
                gender : 'male'
            },
            {
                name : 'han',
                age : 35,
                gender : 'male'
            },
            {
                name : 'taehu',
                age : 35,
                gender : 'female'
            },
        ];
        
        //setUsers(user);
    },[])

    return(
        <>
            {users}
            {/* {users.map(user => {
                <User user={user} />
            })} */}
        </>
    );

}

export default UserList