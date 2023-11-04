import React from "react"
import { useDispatch } from "react-redux";
import Button from "./Button";
import { incrementAction } from "../containers/HomeContainer/action";

function Increment(){
    const dispatch = useDispatch();
    return (
        <div>
            <Button title={"+"} action={() => {dispatch(incrementAction())}}/>
        </div>
    )
};

export default Increment;