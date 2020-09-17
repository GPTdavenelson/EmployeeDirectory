import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SimpleTable from './Components/SimpleTable';
import Filterbar from './Components/Filterbar';
import { employee_data } from './mock-data/employee-directory';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    backgroundColor: '#cfe8fc',
    height: '100vh',
}));

function App() {
    const [activeFilter, setActiveFilter] = React.useState(null);
    const [tableData, setTableData] = React.useState(employee_data);

    const classes = useStyles();
    useEffect(() => {
        if (activeFilter !== null) {
            filterTable();
        }
        if (activeFilter === '') {
            setTableData(employee_data);
        }
    }, [activeFilter]);

    function filterTable() {
        setTableData(employee_data.filter((employee) => employee.jobTitle === activeFilter));
    }

    return (
        <div className="App">
            <Container maxWidth="md">
                <Filterbar employees={employee_data} activeFilter={activeFilter} onChange={setActiveFilter} />
                <SimpleTable employees={tableData} />
            </Container>
        </div>
    );
}

export default App;
