import React from 'react';

class UserTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnRemoveUser = this.handleOnRemoveUser.bind(this);
  }

  render() {
    return (
      <div>
        <h2>User list</h2>

        <table className="table">
          <thead>
            {this.tableHeader()}
          </thead>
          <tbody>
            {this.tableRows()}
          </tbody>
        </table>
      </div>
    );
  }

  tableHeader() {
    return (
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th></th>
      </tr>
    );
  }

  tableRows() {
    return this.props.users.map((user, index) => {
      return (
        <tr key={user.email}>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-danger" data-index={index} onClick={this.handleOnRemoveUser}>
              Remove user
            </button>
          </td>
        </tr>
      );
    });
  }

  handleOnRemoveUser(event) {
    const index = parseInt(event.target.dataset.index);
    this.props.handleOnRemoveUser(index);
  }
}

export default UserTable;

