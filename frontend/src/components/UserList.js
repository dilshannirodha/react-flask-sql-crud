import React from 'react';

const UserList = ({ users, onDeleteUser, onUpdateUser }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        {user.name} - {user.email}
        <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        <button onClick={() => onUpdateUser(user.id, { name: 'Updated Name', email: 'updated@example.com' })}>
          Update
        </button>
      </li>
    ))}
  </ul>
);

export default UserList;
