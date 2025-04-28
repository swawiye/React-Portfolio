import React from "react";

//Class based components
class ReachOut extends React.Component {
    render() {
        return <h4>Email address: {this.props.email}</h4>
    }
}
export default ReachOut;