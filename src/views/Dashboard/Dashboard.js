import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "../../components/Card/Card";
import {
  faClipboardList,
  faEye,
  faHandHoldingUsd,
  faPaperPlane,
  faQuestion,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import {
  dataPieAges,
  dataPieGender,
  dataPieLocations,
  dataSales,
  legendPieAges,
  legendPieGender,
  legendPieLocations,
  legendSales,
  optionsSales,
  responsiveSales
} from "../../variables/Variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { StatsCard } from "../../components/StatsCard/StatsCard";

library.add(
  faUsers,
  faHandHoldingUsd,
  faPaperPlane,
  faEye,
  faClipboardList,
  faQuestion
);

class Dashboard extends Component {
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
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard // Total Audience Card
                bigIcon={<FontAwesomeIcon icon="users" color="blue" />}
                statsText="Total Audience"
                statsValue="19,321"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard // Total Incentives Card
                bigIcon={
                  <FontAwesomeIcon icon="hand-holding-usd" color="green" />
                }
                statsText="Total IncentiveS Given"
                statsValue="Ksh. 32,465"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard // Total Surveys Sent Card
                bigIcon={<FontAwesomeIcon icon="paper-plane" color="orange" />}
                statsText="Total Surveys Sent"
                statsValue="13,321"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard // Total Impressions Made Card
                bigIcon={<FontAwesomeIcon icon="eye" color="green" />}
                statsText="Total Impressions Made"
                statsValue="32,435"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard // Total Surveys Completed Card
                bigIcon={
                  <FontAwesomeIcon icon="clipboard-list" color="orange" />
                }
                statsText="Total Surveys Completed"
                statsValue="23,546"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard // Total Questions Asked Card
                bigIcon={<FontAwesomeIcon icon="question" color="blue" />}
                statsText="Total Questions Asked"
                statsValue="86,321"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
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
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={6}>
              <Card // Audience Growth Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Audience Growth"
                category="Weekly Performance"
                stats="Updated now"
                content={
                  <div className="ct-chart">
                    <ChartistGraph // Audience Growth Graph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <Card // Audience Locations Card
                statsIcon="fa fa-clock-o"
                title="Audience Locations"
                category=""
                stats="Updated now"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph // Audience Locations Graph
                      data={dataPieLocations}
                      type="Pie"
                    />
                  </div>
                }
                legend={
                  <div className="legend">
                    {this.createLegend(legendPieLocations)}
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card // Age Distribution Chart
                statsIcon="fa fa-clock-o"
                title="Age Distribution"
                category=""
                stats="Updated now"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph // Audience Distribution Graph
                      data={dataPieAges}
                      type="Pie"
                    />
                  </div>
                }
                legend={
                  <div className="legend">
                    {this.createLegend(legendPieAges)}
                  </div>
                }
              />
            </Col>
            <Col md={4}>
              <Card // Gender Distribution Card
                statsIcon="fa fa-clock-o"
                title="Gender Distribution"
                category=""
                stats="Updated now"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph // Gender Distribution Graph
                      data={dataPieGender}
                      type="Pie"
                    />
                  </div>
                }
                legend={
                  <div className="legend">
                    {this.createLegend(legendPieGender)}
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
