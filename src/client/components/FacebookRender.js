import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
const appId = "531029017304611";

export default class Facebook extends Component {
  state = {
    name: ""
  };

  responseFacebook = ({name}) => {
    const { loginHandler } = this.props;
    if (!name) {
    loginHandler(false);
    } else
    loginHandler(true);
    this.setState({name});
  };

  logOutHandler = () => {
    const { loginHandler } = this.props;
    loginHandler(false);
    window.FB.logout();
  };

  render() {
    const { name } = this.state;
    const { logout, loggedIn, loginText } = this.props;
    return (
      <>
        {loggedIn ? (
          <section className="welcome">
            <p>
              Welcome {name}!
              <span id="logout-link" onClick={this.logOutHandler}>
                {logout}
              </span>
            </p>
          </section>
        ) : (
          <FacebookLogin
            appId={appId}
            autoLoad={true}
            cssClass="fbbutton"
            textButton={loginText}
            callback={this.responseFacebook}
          />
        )}
      </>
    );
  }
}
