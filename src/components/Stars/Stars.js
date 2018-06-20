import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DataTable from '../common/DataTable';
import * as starActions from '../../actions/starActions';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
});

class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableBgColor: '#ccc'
        };

        this.columns = [
            {
                id: 'proper',
                displayName: 'Proper'
            },
            {
                id: 'spect',
                displayName: 'Spect'
            },
            {
                id: 'mag',
                displayName: 'Mag'
            },
            {
                id: 'x',
                displayName: 'X'
            },
            {
                id: 'y',
                displayName: 'Y'
            },
            {
                id: 'z',
                displayName: 'Z'
            }
        ];
        this.className = 'table-header';
    }

    toggleColor = () => {
        this.setState({
            tableBgColor: this.state.tableBgColor === '#ccc' ? '#ffe6e6' : '#ccc'
        });
    };
    componentWillMount(){
        this.props.getStarsData();
    }
    render() {

        const { classes, stars } = this.props;
        const { tableBgColor } = this.state;

        return (
            <Paper className={classes.root} elevation={10}>
                <Button variant="contained" color="primary" onClick={this.toggleColor}>
                    Toggle Color
                </Button>
                <div className="table-container">
                    <DataTable columns={this.columns} className={this.className} data={stars} bgColor={tableBgColor} />
                </div>
            </Paper>
        );
    }
}

const mapStateToProps = ({ stars }) => ({
    stars
});
const mapDispachToProps = (dispatch) => {
    return   bindActionCreators({
        getStarsData: starActions.fetchStars
    },dispatch);
}
export default connect(mapStateToProps, mapDispachToProps)(withStyles(styles)(Stars));