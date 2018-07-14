import React from "react";

import { Button, Modal } from "react-bootstrap";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

import DashboardPropertiesData from "../../controller/AudiencePropertiesData2";

const DashboardModal = props => {
  /* Modal that is responsible for toggling visible columns */
  return (
    <div className="container-fluid">
      <Modal show={props.showModal} onHide={props.closeColumnDialog}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center" id="contained-modal-title-sm">
            Toggle Visible Columns
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {DashboardPropertiesData.map(column => {
            return (
              <CustomCheckbox
                key={column.dataField}
                label={column.text}
                number={column.dataField}
                onChanging={props.changeColumn}
                isChecked={!props.hiddenColumns.includes(column.dataField)}
              />
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.closeColumnDialog}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DashboardModal;
