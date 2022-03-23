import { useParams, useLocation , Outlet} from "react-router-dom";
import "../index.css";
import { Child } from "./Child";

const App = () => {
    const { color1 , color2 , color3 } = useParams();
    // let location = useLocation();
    // console.log(location.pathname)

    return (
        <main style={{ backgroundColor: `${color1}`}}>
            <Child bgColor={ color2 } color3={ color3 }/>
        </main>
    );
};

export default App;
