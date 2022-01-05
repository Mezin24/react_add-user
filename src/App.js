import React, { useState } from 'react';
import './App.css';
import AddUser from './User/AddUser';
import UserList from './User/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => [
      ...prevList,
      {
        name: uName,
        age: uAge,
        id: Math.random().toString(),
      },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
