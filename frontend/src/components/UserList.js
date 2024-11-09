import React from 'react';

const UserList = ({ users, onDeleteUser, onUpdateUser }) => (
  <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 overflow-auto">
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
                  onClick={() => onUpdateUser(user.id, { name: 'Updated Name', email: 'updated@example.com' })}
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
  </div>
);

export default UserList;
