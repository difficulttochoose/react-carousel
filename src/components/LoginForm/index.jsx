import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import classNames from 'classnames';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      userPass: '',
      isPassValid: null,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      isPassValid: !value.includes(' '),
    });

    this.setState({
      [name]: value,
    });
  };

  handleEmailChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { userEmail, userPass, isPassValid } = this.state;
    const passClasses = classNames(styles.input, {
      [styles.inputValid]: isPassValid,
    });

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          placeholder="your email"
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={this.handleEmailChange}
          className={styles.input}
        />
        <input
          placeholder="your password"
          type="password"
          name="userPass"
          value={userPass}
          onChange={this.handleChange}
          className={passClasses}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default LoginForm;