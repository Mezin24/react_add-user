import './AddUser.css';
import Card from '../UI/Card';

const AddUser = () => {
  return (
    <Card>
      <form>
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
