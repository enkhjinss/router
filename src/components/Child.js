import { Child1 } from "./Child1";

export const Child = ({ bgColor , color3}) => {
    return (<>
        <div className="child" style={{ backgroundColor: `${bgColor}` }}>
           <Child1 color3={ color3 }/>
        </div>


    </>)
};
