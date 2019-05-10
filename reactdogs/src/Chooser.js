import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dogbreeds from './constants/Dogbreeds';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 12,
    marginBottom: 4
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class Chooser extends React.Component {
  state = {
    name: 'Chooser',
    dogbreeds: {},
    currentBreed: this.props.currentBreed
  };

  handleChange = ({ target: { value } }) => {
    this.props.updateDoggo(value)
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-select-dogbreeds-native"
          select
          label="Choose a dog breed"
          className={classes.textField}
          value={this.props.currentBreed}
          onChange={this.handleChange}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText=""
          margin="normal"
          variant="outlined"
        >
          {Dogbreeds.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </form>
    );
  }
}

Chooser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chooser);