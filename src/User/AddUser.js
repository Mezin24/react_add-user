import classes from './AddUser.module.css';
import Card from '../UI/Card';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='name'>Username</label>
        <input type='text' id='name' />
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' />
        <button>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
