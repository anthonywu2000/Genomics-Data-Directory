import { CircularProgress } from "@material-ui/core";

// creates the progress loader display on screen
const Loader = () => {
    return (
        <div className="table-container">
            <CircularProgress />
        </div>
    )
};

export default Loader;
