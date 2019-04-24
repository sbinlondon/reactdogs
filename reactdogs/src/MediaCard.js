import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from './CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 500,
    marginBottom: 12
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '10vh' }}
      >
      <Card className={classes.card}>
        <CardMedia />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Labrador
          </Typography>
          <Typography component="p">
          <p>Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered</p>
          <p>25 - 36 kgs</p>
          <p>10 - 13 years average life span</p>
          </Typography>
        </CardContent>
    </Card>
    </Grid>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);