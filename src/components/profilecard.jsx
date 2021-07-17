import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  image: {
    borderRadius: 10,
  },
});

export default function ProfileCard({ profile }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.image}
          alt={profile.name}
          height="140"
          image={profile.image}
          title={profile.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {profile.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {profile.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
