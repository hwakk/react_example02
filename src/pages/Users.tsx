import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../components/UserList";
import Spinner from "../components/Spinner";

interface UserSet {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: any;
  company: any;
  website: string;
}

const Users = () => {
  const [users, setUsers] = useState<UserSet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <React.Fragment>
      <h1>Users</h1>
      {loading ? <Spinner /> : <UserList users={users} />}
    </React.Fragment>
  );
};

export default Users;
