// import React from "react";
// 
// //Class based components
// class ReachOut extends React.Component {
//     render() {
//         return <h4>Email address: {this.props.email}, Phone: {this.props.phone} & LinkedIn: {this.props.linkedin}</h4>
//     }
// }
// export default ReachOut;
import { useState } from "react";

const ReachOut = () => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {}
    return (
        <div>
            <form className="contact-form">
                <h3>Reach out to me</h3>
                <label className="form-label">Name</label>
                <input className="form-input"></input>
                <label className="form-label">Message</label>
                <input className="form-input"></input>
                <button>Send</button>
            </form>
            <h3>Phone: +254701374708</h3>
            <h3>Email address: sovereign.wawiye@gmail.com</h3>
            <h3>LinkedIn: Sovereign Wawiye</h3>
        </div>
    )
}
export default ReachOut;