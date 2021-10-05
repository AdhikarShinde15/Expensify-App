// Higher Order COmponent (HOC) - A component that renders another component

import React from "react";
import ReactDOM from "react-dom"


const Info = (props) => (<div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
</div>);

const withAdminWarning  = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info . Please Do not share!</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated && <p>Please Login to View Info</p>}
            {props.isAuthenticated && <WrappedComponent {...props} />}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="Details" />,document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Details" />,document.getElementById('app'))