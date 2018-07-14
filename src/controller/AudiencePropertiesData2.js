// Dashboard Properties File

const id = false;

const dashboard_properties_data = [
  {
    fall: id,
    dataField: "id",
    width: "80",
    text: "No.",
    isKey: true,
    filterType: undefined
  },
  {
    dataField: "name",
    width: "300",
    text: "Name",
    isKey: false,
    filterType: "TextFilter"
  },
  {
    dataField: "contact",
    width: "300",
    text: "Contact",
    isKey: false,
    filterType: "TextFilter"
  },
  {
    dataField: "company_name",
    width: "300",
    text: "Company Name",
    isKey: false,
    filterType: "TextFilter"
  },
  {
    dataField: "city",
    width: "300",
    text: "City",
    isKey: false,
    filterType: "TextFilter"
  },
  {
    dataField: "date_registered",
    width: "300",
    text: "Date Registered",
    isKey: false,
    filterType: "DateFilter"
  },
  {
    dataField: "last_seen",
    width: "300",
    text: "Last Seen",
    isKey: false,
    filterType: "DateFilter"
  },
  {
    dataField: "incentive_received",
    width: "300",
    text: "Incentive Received (Ksh.)",
    isKey: false,
    filterType: "NumberFilter"
  },
  {
    dataField: "surveys_received",
    width: "300",
    text: "Surveys Received",
    isKey: false,
    filterType: "NumberFilter"
  },
  {
    dataField: "surveys_completed",
    width: "300",
    text: "Surveys Completed",
    isKey: false,
    filterType: "NumberFilter"
  },
  {
    dataField: "engagement_rate",
    width: "300",
    text: "Engagement Rate (Percentage)",
    isKey: false,
    filterType: "NumberFilter"
  }
];

export default dashboard_properties_data;
