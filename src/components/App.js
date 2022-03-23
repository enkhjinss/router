import { useParams, useLocation , Outlet} from "react-router-dom";
import "../index.css";
// import { Child } from "./Child";

const App = () => {
    const { color1 } = useParams();
    // let location = useLocation();
    // console.log(location.pathname)

    return (
        <main style={{ backgroundColor: `${color1}`}}>
            <Outlet />
        </main>
    );
};

export default App;
