import { Button, Link} from '@mui/material'

// creates the doi link constructed in the table
const Linker = ({str}) => {
    return (
        <Link href={`https://doi.org/${str}`} target="_blank" rel="noopener">
                <Button style={{
                    backgroundColor: 'transparent',
                    textTransform: "lowercase", 
                    color: 'blue', 
                    border: 'none', 
                    cursor: 'pointer'}} 
                    sx={{ 
                        '&:hover': { backgroundColor: 'transparent' }
                    }
                }>
                    {`https://doi.org/${str}`}
                </Button>
        </Link>
    )
};

export default Linker;
