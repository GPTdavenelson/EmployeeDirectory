import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    title: {
        fontWeight: 700,
    },
});

export default function SimpleTable({ employees, ...props }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.title}>First Name</TableCell>
                        <TableCell className={classes.title} align="left">
                            Last Name
                        </TableCell>
                        <TableCell className={classes.title} align="left">
                            Title
                        </TableCell>
                        <TableCell className={classes.title} align="left">
                            Email
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {employee.firstName}
                            </TableCell>
                            <TableCell align="left"> {employee.lastName}</TableCell>
                            <TableCell align="left">{employee.jobTitle}</TableCell>
                            <TableCell align="left">{employee.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
