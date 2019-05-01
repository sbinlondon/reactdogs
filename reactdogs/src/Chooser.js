import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

const dogbreeds = [
  {
    value: 'Akita',
    label: 'Akita',
  },
  {
    value: 'Beagle',
    label: 'Beagle',
  },
  {
    value: 'Boxer',
    label: 'Boxer',
  },
  {
    value: 'Chihuahua',
    label: 'Chihuahua',
  },
  {
    value: 'Dachshund',
    label: 'Dachshund',
  },
  {
    value: 'Dingo',
    label: 'Dingo',
  },
  {
    value: 'Golden Retriever',
    label: 'Golden Retriever',
  },
  {
    value: 'Great Dane',
    label: 'Great Dane',
  },
  {
    value: 'Husky',
    label: 'Husky',
  },
  {
    value: 'Labrador',
    label: 'Labrador',
  },
  {
    value: 'Newfoundland',
    label: 'Newfoundland',
  },
  {
    value: 'Poodle',
    label: 'Poodle',
  },
  {
    value: 'Pug',
    label: 'Pug',
  },
  {
    value: 'Puggle',
    label: 'Puggle',
  },
  {
    value: 'Staffordshire Bull Terrier',
    label: 'Staffordshire Bull Terrier',
  },
  {
    value: 'Whippet',
    label: 'Whippet',
  },
];

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
          {dogbreeds.map(option => (
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