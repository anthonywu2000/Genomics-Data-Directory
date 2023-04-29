import { Table } from "@material-ui/core";
import { TableContainer, Paper } from '@mui/material';
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
import TableContent from "./components/TableContent";

const Display = ({filter, func, dat, label}) => {
    return (
        <div className="table-container">
            <SearchBar filter={filter} func={func} />
            <TableContainer component={Paper} sx={{width: "80%", margin: "auto"}}>
                <Table size="small" aria-label={label} stickyHeader>
                    <TableHeader col1={"Name"} col2={"DOI"} />
                    <TableContent dat={dat} />
                </Table>
            </TableContainer>
        </div>
    )
};

export default Display;