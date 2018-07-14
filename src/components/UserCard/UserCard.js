import React, { Component } from "react";

import Avatar from "react-avatar";

export class UserCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <div className="image" />
        <div className="content">
          <div className="author">
            <Avatar round={true} name={this.props.avatar} />

            <h4 className="title">
              {this.props.name}
              <br />
              <small>{this.props.userName}</small>
            </h4>
            <h4 className="title">
              {this.props.name_second}
              <br />
            </h4>
            <h5> {this.props.name_third}</h5>
          </div>
          <p className="description text-center">{this.props.description}</p>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default UserCard;
