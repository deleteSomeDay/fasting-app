import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
class TimerInput extends React.Component {
    render() {
      return (
        <div style={{ fontSize:'1em'}}>
          <h3 style={{ fontSize: '1em'}}>Input your desired time</h3>
          <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
        </div>
      );
    }
  }

  const SimpleDialog = (props) => {
  const handleClose = () => {
    props.onClose();
  };

  

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={true}>
      <DialogTitle id="simple-dialog-title">How many hours do you want to fast?</DialogTitle>
      <TimerInput styles={{marginLeft: '30vw'}} value={props.hours} handleChange={props.handleChange}/>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;