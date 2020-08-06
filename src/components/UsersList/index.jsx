import React from 'react';
import UserListItem from './UserListItem';

const UsersList = props => {
  const { users, setUsers } = props;

  const mapUser = (user, index) => {
    const selectUserHandler = () => {
      //const newUsers = JSON.parse(JSON.stringify(users)); // плохА
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };

    return (
      <UserListItem
        key={user.id}
        user={user}
        onSelect={selectUserHandler}
        isSelected={user.isSelected}
      />
    );
  };

  return <ul>{users.map(mapUser)}</ul>;
};
// Parent => Child = props
// Child => Parent = callback
export default UsersList;