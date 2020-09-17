import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Button, Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 650,
    },
    filterbar: {
        padding: 10,
        marginBottom: 20,
    },
    formControl: {
        margin: 20,
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: 20,
    },
});

function Filterbar({ employees, onChange, activeFilter, ...props }) {
    const classes = useStyles();
    const [uniqueJobTitles, setUniqueJobTitles] = React.useState([]);

    useEffect(() => {
        const jobTitles = employees.map((employee) => employee.jobTitle);
        setUniqueJobTitles([...new Set(jobTitles)]);
    }, []);
    return (
        <div className={classes.root}>
            <Paper classes={{ root: classes.filterbar }} elevation={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Filter By</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={activeFilter || ''}
                        onChange={(e) => onChange(e.target.value)}
                        label="Filter">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {uniqueJobTitles.length > 0 &&
                            uniqueJobTitles.map((title, index) => {
                                return (
                                    <MenuItem key={index} value={title}>
                                        {title}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                </FormControl>
            </Paper>
        </div>
    );
}
export default Filterbar;
