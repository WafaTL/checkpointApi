
import './App.css';
import { useEffect, useState } from 'react';
import UserList from './components/UserList';
import axios from "axios";


function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const getusers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUsers(res.data);
      setLoading(false);
    } catch (err) {
      console.log("error:", err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getusers();
  }, []);
  if (loading === true) {
    return <div>loading...</div>;
  }

  if (error !== '') {
    return <div>{error}</div>;
  }

  return (
    <div className="container">
      <UserList users={users} />
    </div>
  );
}

export default App;
