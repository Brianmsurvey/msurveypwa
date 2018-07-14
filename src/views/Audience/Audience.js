import React from "react";

import BootstrapTable from "react-bootstrap-table-next";
import GetAudienceData from "../../controller/AudienceData";
import AudiencePropertiesData from "../../controller/AudiencePropertiesData";
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

import { Col, Grid, Row } from "react-bootstrap";

import Card from "../../components/Card/Card";

export default class Audience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audience: [],
      audiencePropertiesData: [],
      hasRendered: false
    };
  }
  render() {
    return (
      this.state.hasRendered && (
        <div className="container-fluid content">
          <Grid fluid>
            <Row>
              <Col md={12}>
                <Card
                  title="Audience Profiles"
                  category="800 users matched of 1000"
                  content={
                    <BootstrapTable
                      keyField="id"
                      data={this.state.audience}
                      columns={this.state.audiencePropertiesData}
                      pagination={paginationFactory()}
                      filter={filterFactory()}
                      search
                      striped
                      hover
                      condensed
                    />
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
    this.setState(() => ({
      audience: GetAudienceData(),
      audiencePropertiesData: AudiencePropertiesData,
      hasRendered: true
    }));
  }
}
