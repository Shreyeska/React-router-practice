import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") == "active";
  return (
    <>
      <div>
        <nav>
          <Link to={`/users/1`}>
            <h2>User 1</h2>
          </Link>
          <Link to={`/users/2`}>
            <h2>User 2</h2>
          </Link>
          <Link to={`/users/3`}>
            <h2>User 3</h2>
          </Link>
        </nav>
        <Outlet />
        <div>
          <button onClick={() => setSearchParams({ filter: "active" })}>
            Active User
          </button>
          <button>Reset Filter</button>
        </div>
        {showActiveUsers ? (
          <h2>Showing Active Users</h2>
        ) : (
          <h2>Showing All Users</h2>
        )}
      </div>
    </>
  );
};

export default Users;
