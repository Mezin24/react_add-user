import React, { useState, useRef } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [error, setError] = useState();

  const enteredName = useRef();
  const enteredAge = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUserName = enteredName.current.value;
    const enteredUserAge = enteredName.current.value;

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });

      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    enteredName.current.value = '';
    enteredAge.current.value = '';

    enteredName.current.focus();
  };

  const errorHandler = () => setError(null);

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Username</label>
          <input type="text" id="name" ref={enteredName} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={enteredAge} />
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
