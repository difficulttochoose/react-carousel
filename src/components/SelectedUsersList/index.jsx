import React from 'react';
import styles from './SelectedUsersList.module.css';

function SelectedUsersList(props) {
  const { users } = props;
  const selectedUsers = users.filter(u => u.isSelected);
  return (
    <ol>
      {selectedUsers.map(u => (
        <li className={styles.red} key={u.id}>
          {u.name} {u.id}
        </li>
      ))}
    </ol>
  );
}

export default SelectedUsersList;