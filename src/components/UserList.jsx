import React from 'react';
import UsertItem from './UserItem';

const UserList = ({users}) => {
  
  const userList = users.map(user => <UsertItem key={user.id} user={user} />);

  return (
    <div className="Container py-5">
      <div className="row">{userList}</div>
    </div>
  );
};

export default UserList;
