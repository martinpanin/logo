import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

function PaperSheet(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h3" component="h1">
                    Logod
                </Typography>
                <Typography component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu accumsan turpis. Donec nec nibh nunc. Pellentesque non sapien augue. Cras nisl urna, tempus a leo sed, sagittis bibendum magna. Duis imperdiet ex orci. Fusce auctor aliquam aliquam. Sed porttitor, nunc sed maximus dictum, lectus neque venenatis ante, a efficitur nibh dolor eu ex. Duis vitae ultricies quam, vitae mollis magna. In ac molestie nunc. Donec et massa id nisi interdum auctor. Aenean efficitur velit quis dui facilisis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vitae condimentum magna. Sed lacinia tellus vitae est semper semper.
                </Typography>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);