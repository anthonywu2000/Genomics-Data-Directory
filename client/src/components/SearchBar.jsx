import { Search as SearchIcon } from '@material-ui/icons';
import { InputBase, IconButton } from "@material-ui/core";

// creates the search bar with search icon on the left of the input field
const SearchBar = ({filter, func}) => {
    return (
        <div className="filter-container">
            <div className="search-icon-container">
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
            <InputBase placeholder="Filter By Name..." value={filter} onChange={func} classes={{
                root: 'input-root',
                input: 'input-input'
            }}/>
        </div>
    )
};

export default SearchBar;
