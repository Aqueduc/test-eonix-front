import React from "react";
function Button(props){
    let {action,title,disabled} = props;
    return <button onClick={action} disabled={disabled}>{title}</button>;
}

export default Button;