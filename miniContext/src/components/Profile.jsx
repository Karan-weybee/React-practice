import React,{useContext} from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
    const {user}= useContext(UserContext)
    if(!user || user.username=='') return <div className='m-2'>Please Log In</div>

    return (
        <div className='m-2'>
            Welcome {user.username}
        </div>
    );
}

export default Profile;
