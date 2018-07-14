import React from "react";

import { ButtonGroup } from "react-bootstrap";

const DashboardButtonGroup = props => {
  /* Button group that displays above dashboard table */
  return (
    <ButtonGroup className="my-custom-class" sizeclass="btn-group-md">
      {props.exportCSVBtn}
      <button
        onClick={props.openColumnDialog}
        type="button"
        className={`btn btn-primary`}
      >
        Visible Columns
      </button>
    </ButtonGroup>
  );
};

export default DashboardButtonGroup;
