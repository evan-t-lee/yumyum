import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
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
    padding: 50,
  },
  avatar: {
    width: 150,
    height: 150,
  }
});

export default function ProfileCard({ profile }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <Avatar className={classes.avatar} alt={profile.name} src={profile.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {profile.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {`${profile.age}, ${profile.role}`}
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
