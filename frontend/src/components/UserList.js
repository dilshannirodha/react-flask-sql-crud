import React, { useState } from 'react';

const UserList = ({ users, onDeleteUser, onUpdateUser }) => {
  const [editingUser, setEditingUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({ name: '', email: '' });

  const handleEditClick = (user) => {
    setEditingUser(user);
    setUpdatedUser({ name: user.name, email: user.email });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updatedUser.name && updatedUser.email) {
      onUpdateUser(editingUser.id, updatedUser);
      setEditingUser(null); // Close the form after submission
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 overflow-auto">
      {editingUser ? (
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-4">Update User</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={updatedUser.name}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500 transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      ) : (
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Name</th>
              <th className="px-4 py-2 text-left text-gray-600 font-semibold">Email</th>
              <th className="px-4 py-2 text-right text-gray-600 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="bg-gray-50 border-b">
                <td className="px-4 py-2 text-gray-700">{user.name}</td>
                <td className="px-4 py-2 text-gray-700 truncate max-w-xs">{user.email}</td>
                <td className="px-4 py-2 text-right whitespace-nowrap">
                  <div className="flex space-x-2 justify-end">
                    <button
                      onClick={() => onDeleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEditClick(user)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
