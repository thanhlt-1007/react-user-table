import React from 'react';

import UserTable from './UserTable';
import UserForm from './UserForm';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.initUsers()
    }

    this.handleOnRemoveUser = this.handleOnRemoveUser.bind(this);
    this.handleOnAddUser = this.handleOnAddUser.bind(this);
  }

  render() {
    return (
      <div className="container">
        <UserTable users={this.state.users} handleOnRemoveUser={this.handleOnRemoveUser} />
        <UserForm handleOnAddUser={this.handleOnAddUser} />
      </div>
    );
  }

  initUsers() {
    return [
      { first_name: "John", last_name: "Doe", email: "john.doe@example.com" },
      { first_name: "Mary", last_name: "Moe", email: "mary.moe@example.com" },
      { first_name: "July", last_name: "Dooley", email: "july.dooley@example.com" }
    ];
  }

  handleOnRemoveUser(index) {
    const users = this.state.users.filter((user, i) => {
      return i !== index;
    });

    this.setState({
      users: users
    });
  }

  handleOnAddUser(user) {
    let users = this.state.users
    users.push(user);

    this.setState({
      users: users
    });
  }
}

export default App;
