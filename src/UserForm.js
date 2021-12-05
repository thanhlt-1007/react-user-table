import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initUser();

    this.hanleOnUpdateUser = this.hanleOnUpdateUser.bind(this);
    this.handleOnAddUser = this.handleOnAddUser.bind(this);
  }

  render() {
    return (
      <div>
        <h2>User form</h2>
        <form className="form-horizontal" onSubmit={this.handleOnAddUser}>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="first-name">First name:</label>
            <div className="col-sm-10">
              <input type="text" name="firstName" className="form-control" id="first-name"
                value={this.state.firstName}
                onChange={this.hanleOnUpdateUser} />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="last-name">Last name:</label>
            <div className="col-sm-10">
              <input type="text" name="lastName" className="form-control" id="last-name"
                value={this.state.lastName}
                onChange={this.hanleOnUpdateUser} />
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email:</label>
            <div className="col-sm-10">
              <input type="text" name="email" className="form-control" id="email"
                value={this.state.email}
                onChange={this.hanleOnUpdateUser} />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">
                Add user
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }

  hanleOnUpdateUser(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleOnAddUser(event) {
    event.preventDefault();
    this.props.handleOnAddUser(this.user());
    this.setState(this.initUser());
  }

  user() {
    return {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email
    };
  }

  initUser() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    };
  }
}

export default UserForm;
