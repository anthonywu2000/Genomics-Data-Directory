import Linker from "./Linker.jsx";
import { TableRow, TableCell, TableBody } from "@material-ui/core";

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