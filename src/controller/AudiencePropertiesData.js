import { textFilter } from "react-bootstrap-table2-filter";

// Dashboard Properties File
const dashboard_properties_data = [
  {
    dataField: "id",
    text: "#"
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    filter: textFilter(),
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "contact",
    text: "Contact",
    sort: true,
    filter: textFilter(),
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "company_name",
    text: "Company Name",
    sort: true,
    filter: textFilter(),
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "city",
    text: "City",
    sort: true,
    filter: textFilter(),
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "date_registered",
    text: "Date Registered",
    sort: true,
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "last_seen",
    text: "Last Seen",
    sort: true,
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "incentive_received",
    text: "Incentive Received (Ksh.)",
    sort: true,
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "surveys_received",
    text: "Surveys Received",
    sort: true,
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "surveys_completed",
    text: "Surveys Completed",
    filterI: "num",
    sort: true,
    headerStyle: () => {
      return { width: "300px" };
    }
  },
  {
    dataField: "engagement_rate",
    text: "Engagement Rate (Percentage)",
    sort: true,
    headerStyle: () => {
      return { width: "300px" };
    }
  }
];

export default dashboard_properties_data;
