import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

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

const User = () => {
  const [user, setUser] = useState<UserSet>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      });
  }, []);

  const userDetail = loading ? (
    <Spinner />
  ) : (
    <div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>{user?.phone}</div>
    </div>
  );

  return (
    <React.Fragment>
      <h1>User Info</h1>
      {userDetail}
    </React.Fragment>
  );
};

export default User;
