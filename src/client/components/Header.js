import React, { Component } from "react";

class Header extends Component {
    signOut() {
        Auth.signOut()
          .then(data => console.log(data))
          .catch(err => console.log(err))
      }
  
    render() {
        return (
    <header className = "header-main">
        <img className = "header-image" src="https://live.staticflickr.com/65535/48802761707_09086693ff_b.jpg"/>
        <div className = "inner">sdfsdfsd</div>
        <h2 className = "headline-text">VOTE FOR ANTHONY'S BEST TALENT //Place Holder</h2>
        <span>Hello {this.props.username}
        <button onClick={this.signOut}>Sign Out</button>        
        </span>
    </header>

        )
    }
}

export default Header;