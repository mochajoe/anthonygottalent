import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

const Modal = ({ description, onCloseModal, openModal, title }) => (
  <Dialog
    open={openModal}
    onClose={onCloseModal}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {description}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCloseModal} color="primary">
        Okay
      </Button>
    </DialogActions>
  </Dialog>
);



export default Modal;
