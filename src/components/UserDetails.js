import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  /*** 
    IT is the same as the below code
    const {userId} = useParams();
***/
  return <div>Details about the User {userId}</div>;
};

export default UserDetails;
