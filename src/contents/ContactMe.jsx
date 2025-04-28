import React from "react";
//Class based components
class Greet extends React.Component {
    render() {
        return <h3>Hello {this.props.name}</h3>
    }
}
export default Greet;