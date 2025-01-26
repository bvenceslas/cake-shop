import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h2 className="mb-5">User List</h2>
      {userData && userData.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
