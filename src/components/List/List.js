import React, { Component } from "react";

export class Tasks extends Component {
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
    const tasks_title = [
      'Sign contract for "What are conference organizers afraid of?"',
      "Lines From Great Russian Literature? Or E-mails From My Boss?",
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi",
      "Create 4 Invisible User Experiences you Never Knew About",
      'Read "Following makes Medium better"',
      "Unfollow 5 enemies from twitter"
    ];
    var tasks = [];
    for (var i = 0; i < tasks_title.length; i++) {
      tasks.push(
        <tr key={i}>
          <td>{tasks_title[i]} completed on 4/12/2017</td>
        </tr>
      );
    }
    return <tbody>{tasks}</tbody>;
  }
}

export default Tasks;
