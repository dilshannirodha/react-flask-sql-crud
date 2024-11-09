import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  const handleAddUser = async (user) => {
    const response = await axios.post('http://localhost:5000/users', user);
    setUsers([...users, response.data]);
  };

  const handleUpdateUser = async (id, updatedUser) => {
    const response = await axios.put(`http://localhost:5000/users/${id}`, updatedUser);
    setUsers(users.map(user => (user.id === id ? response.data : user)));
  };

  const handleDeleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl  font-bold text-gray-800 mb-8 text-center">User Management</h1>
        <UserForm onAddUser={handleAddUser} />
        <UserList users={users} onDeleteUser={handleDeleteUser} onUpdateUser={handleUpdateUser} />
      </div>
    </div>
  );
}

export default App;
