import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 30
  },
  bigAvatar: {
    width: 220,
    height: 220
  }
};

// #4981b5
function UserDescription(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.row}>
        <Avatar
          alt="Adelle Charles"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=9c6aad5d45b5be924f107026c20fc4bb"
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </div>
      <Typography
        variant="headline"
        gutterBottom
        align="center"
        color="primary"
      >
        AIRTIME EARNED
      </Typography>
      <Typography variant="display2" gutterBottom align="center">
        KSH 3,245
      </Typography>
    </div>
  );
}

UserDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserDescription);
