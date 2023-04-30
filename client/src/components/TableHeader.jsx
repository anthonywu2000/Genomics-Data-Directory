import { TableHead, TableRow, TableCell } from "@material-ui/core";
import { Typography } from '@mui/material'

// creates the header of the table, in this case we have two columns with column names in bold text
const TableHeader = ({col1, col2}) => {
    return(
        <TableHead>
            <TableRow>
                <TableCell align="center">
                     <Typography variant="subtitle1" fontWeight="bold">
                        {col1}
                    </Typography>
                </TableCell>
                <TableCell align="center">
                    <Typography variant="subtitle1" fontWeight="bold">
                        {col2}
                    </Typography>
                </TableCell>
            </TableRow>
        </TableHead>
    )
};

export default TableHeader;
