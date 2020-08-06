import React from 'react';

const UserListItem = props => {
  const {
    onSelect,
    isSelected,
    user: { id, name, surname },
  } = props;

  const styles = {
    backgroundColor: isSelected ? 'rgba(0,0,0,0.3)' : 'initial',
  };

  return (
    <li style={styles}>
      <span>
        ID: "{id}"; FULL NAME: "{name} {surname}";
      </span>
      <button onClick={onSelect}>SELECT ME</button>
    </li>
  );
};

export default UserListItem;