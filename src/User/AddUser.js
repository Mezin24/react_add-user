import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    )
      return;

    if (+enteredUserAge < 1) return;

    console.log(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  };

  const nameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='name'>Username</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          type='number'
          id='age'
          onChange={ageChangeHandler}
          value={enteredUserAge}
        />
        <Button type='submit' onClick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
