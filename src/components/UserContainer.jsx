import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading ...</h2>
  ) : userData.error ? (
    <h2 className="text-red-700">{userData.error}</h2>
  ) : (
    <div>
      <h2 className="mb-5">User List</h2>
      {userData &&
        userData.data &&
        userData.data.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
