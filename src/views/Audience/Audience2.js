import React from "react";

import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Col, Grid, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import DashboardButtonGroup from "../../components/ButtonGroups/DashboardButtonGroup";
import DashboardModal from "../../components/DashboardModal/DashboardModal";
import AudiencePropertiesData from "../../controller/AudiencePropertiesData2";
import GetAudienceData from "../../controller/AudienceData";

import Card from "../../components/Card/Card";

export default class Audience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, // Should column visibility modal show
      isDataFetched: undefined, // Has user data been fetched
      hiddenColumns: [], // Array of dashboard table columns that aren't visible
      totalAudience: 0, // Total number of users fetched
      displayLength: 0, // Total number of users after flters have been applied
      dashboardUserData: [] // Array of objects containing individual user data
    };
    this.openColumnDialog = this.openColumnDialog.bind(this);
    this.closeColumnDialog = this.closeColumnDialog.bind(this);
    this.changeColumn = this.changeColumn.bind(this);
  }
  openColumnDialog() {
    /* Open modal to toggle columns in the dashboard table */
    this.setState({ showModal: true });
  }
  closeColumnDialog() {
    /* Close modal to toggle columns in the dashbooard table */
    this.setState({ showModal: false });
  }
  changeColumn(e) {
    /* Allow for columns to be toggled by changing the 'hidden columns' state */
    const column = e.target.id;

    this.state.hiddenColumns.includes(column)
      ? this.setState(prevState => ({
          hiddenColumns: prevState.hiddenColumns.filter(col => col !== column)
        }))
      : this.setState(prevState => ({
          hiddenColumns: prevState.hiddenColumns.concat(column)
        }));
  }
  createTableButtonGroup = props => {
    /* Create custom button group header for dashboard table */
    return (
      <DashboardButtonGroup
        openColumnDialog={this.openColumnDialog}
        exportCSVBtn={props.exportCSVBtn}
      />
    );
  };
  handleSearchChange = () => {
    /* Handle search change from the main search input field */
    this.getFilteredResult();
  };
  columnFormatter = (cell, row) => {
    return (
      <Link to={`/user/${row.id}`} style={{ textDecoration: "none" }}>
        {cell}
      </Link>
    );
  };
  getFilteredResult() {
    /* Get result after filter has been applied */
    const result = this.refs.table.getTableDataIgnorePaging();
    this.setState(() => ({
      displayLength: result.length
    }));
  }
  render() {
    const options = {
      btnGroup: this.createTableButtonGroup,
      noDataText: "Bummer! Audience profile data not found",
      onSearchChange: this.handleSearchChange,
      onFilterChange: this.handleSearchChange,
      afterSearch: function(searchText, result) {
        console.log("searchText", searchText, result);
      }
    };
    return (
      <div className="container-fluid content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Audience Profiles"
                category={`${this.state.displayLength} users matched of ${
                  this.state.dashboardUserData.length
                }`}
                content={
                  <div>
                    <DashboardModal
                      showModal={this.state.showModal}
                      closeColumnDialog={this.closeColumnDialog}
                      changeColumn={this.changeColumn}
                      hiddenColumns={this.state.hiddenColumns}
                    />
                    <BootstrapTable
                      data={this.state.dashboardUserData}
                      options={options}
                      ref="table"
                      search
                      exportCSV
                      csvFileName="mSurvey_Audience_Profile_Data.csv"
                      printable
                      pagination
                      striped
                      hover
                    >
                      {AudiencePropertiesData.map(column => {
                        return (
                          <TableHeaderColumn
                            key={column.dataField}
                            filter={{ type: column.filterType, delay: 1000 }}
                            hidden={
                              this.state.hiddenColumns.includes(
                                column.dataField
                              )
                                ? true
                                : false
                            }
                            dataFormat={
                              column.dataField === "name"
                                ? this.columnFormatter
                                : undefined
                            }
                            isKey={column.isKey}
                            dataField={column.dataField}
                            width={column.width}
                          >
                            {column.text}
                          </TableHeaderColumn>
                        );
                      })}
                    </BootstrapTable>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
  componentDidMount() {
    const dashboardUserData = GetAudienceData();
    this.setState(() => ({
      dashboardUserData,
      totalAudience: dashboardUserData.length,
      displayLength: dashboardUserData.length,
      isDataFetched: true
    }));
  }
}
