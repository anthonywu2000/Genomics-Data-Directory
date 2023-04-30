import Linker from "./Linker.jsx";
import { TableRow, TableCell, TableBody } from "@material-ui/core";

// populate the table with the contents from the api endpoints, each row corresponding to a pset name and it DOI link created by the Linker component
const TableContent = ({dat}) => {
    return (
        <TableBody>
            {
                dat.map((d) => (
                    <TableRow key={d.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="center">{d.name}</TableCell>
                        <TableCell align="center">
                            <Linker str={d.doi}/>
                        </TableCell>
                    </TableRow>
                ))  
            }
        </TableBody>
    )
}

export default TableContent;
