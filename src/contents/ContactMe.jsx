import React from "react";

//Class based components
class ReachOut extends React.Component {
    render() {
        return <h4>Email address: {this.props.email}, Phone: {this.props.phone} & LinkedIn: {this.props.linkedin}</h4>
    }
}
export default ReachOut;