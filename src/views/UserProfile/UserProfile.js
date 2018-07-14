import React, { Component } from "react";

import {
  faCalendar,
  faClock,
  faClipboardList,
  faHandHoldingUsd,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import {
  dataSales,
  legendSales,
  optionsSales,
  responsiveSales
} from "../../variables/Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Row, Col } from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Tasks } from "../../components/List/List";
import { UserCard } from "../../components/UserCard/UserCard";

import Card from "../../components/Card/Card";
import ChartistGraph from "react-chartist";
import GetAudienceData from "../../controller/AudienceData";
import StatsCard from "../../components/StatsCard/StatsCard";

library.add(
  faCalendar,
  faClock,
  faClipboardList,
  faHandHoldingUsd,
  faPaperPlane
);

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      hasRendered: false
    };
  }
  getSelectedUser() {
    /* Get data for user passed in from the dashboard */
    const userData = GetAudienceData();
    const userId = parseInt(this.props.match.params.id, 10);
    const user = userData.find(user => user.id === userId);
    return user;
  }
  createLegend(json) {
    /* Create dashboard graph keys (legends) */
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      this.state.hasRendered && (
        <div className="content">
          <Grid fluid>
            <Row>
              <Col md={4}>
                <UserCard // User description card
                  avatar={this.state.user.name}
                  name={this.state.user.name}
                  name_second={this.state.user.company_name}
                  name_third={this.state.user.city}
                  userName={this.state.user.contact}
                />
              </Col>
              <Col md={8}>
                <Col lg={6} sm={6}>
                  <StatsCard // Total Incentive Card
                    bigIcon={
                      <FontAwesomeIcon icon="hand-holding-usd" color="orange" />
                    }
                    statsText="Incentives Received"
                    statsValue="Ksh. 900"
                    statsIcon={<i className="fa fa-refresh" />}
                    statsIconText="Updated now"
                  />
                </Col>

                <Col lg={6} sm={6}>
                  <StatsCard // Last Seen Card
                    bigIcon={<FontAwesomeIcon icon="calendar" color="blue" />}
                    statsText="Date Last Seen"
                    statsValue="12/07/2018"
                    statsIcon={<FontAwesomeIcon icon="clock" />}
                    statsIconText={` Date Registered: 13/10/2017`}
                  />
                </Col>

                <Col lg={6} sm={6}>
                  <StatsCard // Surveys received Card
                    bigIcon={
                      <FontAwesomeIcon icon="paper-plane" color="blue" />
                    }
                    statsText="Surveys Received"
                    statsValue="873"
                    statsIcon={<i className="fa fa-refresh" />}
                    statsIconText="Updated now"
                  />
                </Col>

                <Col lg={6} sm={6}>
                  <StatsCard // Surveys completed Card
                    bigIcon={
                      <FontAwesomeIcon icon="clipboard-list" color="green" />
                    }
                    statsText="Surveys Completed"
                    statsValue="532"
                    statsIcon={<i className="fa fa-refresh" />}
                    statsIconText="Updated now"
                  />
                </Col>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Card // User Engagement Card
                  statsIcon="fa fa-history"
                  id="chartHours"
                  title="User Engagement Behavior"
                  category="24 Hour Performance"
                  stats="Updated now"
                  content={
                    <div className="ct-chart">
                      <ChartistGraph // User Engagement Graph
                        data={dataSales}
                        type="Line"
                        options={optionsSales}
                        responsiveOptions={responsiveSales}
                      />
                    </div>
                  }
                  legend={
                    <div className="legend">
                      {this.createLegend(legendSales)}
                    </div>
                  }
                />
              </Col>

              <Col md={6}>
                <Card // Surveys Completed List
                  title="Surveys Completed"
                  category="From 13/10/2017"
                  stats="Updated now"
                  statsIcon={<FontAwesomeIcon icon="clipboard-list" />}
                  content={
                    <div className="table-full-width">
                      <table className="table">
                        <Tasks />
                      </table>
                    </div>
                  }
                />
              </Col>
            </Row>
          </Grid>
        </div>
      )
    );
  }
  componentDidMount() {
    // Set user state
    const user = this.getSelectedUser();
    this.setState(() => ({
      user,
      hasRendered: true
    }));
  }
}

export default UserProfile;
