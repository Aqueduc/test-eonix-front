import React from "react"
import { useDispatch } from "react-redux";
import Button from "./Button";
import { decrementAction } from "../containers/HomeContainer/action";

function Decrement(props){
    const dispatch = useDispatch();
    return (
        <div>
            <Button title={"-"} action={() => {dispatch(decrementAction())}}/>
        </div>
    )
};

export default Decrement;