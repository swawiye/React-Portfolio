// import React from "react";
// 
// //Class based components
// class ReachOut extends React.Component {
//     render() {
//         return <h4>Email address: {this.props.email}, Phone: {this.props.phone} & LinkedIn: {this.props.linkedin}</h4>
//     }
// }
// export default ReachOut;
//import { useState } from "react";

import { useState } from "react";

//const ReachOut = ReachOutForm() => {
//    const [text, setText] = useState("");
//    const [error, setError] = useState("");
//
//    const handleSubmit = (event) => {
//        event.preventDefault();
//        if (text.length > 100) {
//            setError("Message must be less than 100 characters long")
//            return
//        }
//        setError("")
//        setText("")
//    }
//    return (
//        <div>
//            <form onSubmit={handleSubmit} className="contact-form">
//                <h3>Reach out to me</h3>
//                <label className="form-label">Name</label>
//                <input type="text" className="form-input"/>
//                <label htmlFor="text" className="form-label">Message</label>
//                <input type="text" value={text} className="form-input"/>
//                {error && <p>{error}</p>}
//                <button type="submit">Send</button>
//            </form>
//
//        </div>
//    )
//}
//export default ReachOut;

//  <h3>Phone: +254701374708</h3>
//  <h3>Email address: sovereign.wawiye@gmail.com</h3>
//  <h3>LinkedIn: Sovereign Wawiye</h3>

const ReachOut = () => {
    const initialValues = {username:"", email:"",password:""};
    const [formValues, setFormValues] = useState(initialValues);
    
    const handleInput = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value})
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form onSubmit={handleSubmit} className="contact-form">
                <h3>Reach out to me</h3>
                <div>
                    <label className="form-label">Username</label>
                    <input type="text" name="username" className="form-input" value={formValues.username} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="text" className="form-label">Email</label>
                    <input type="text" name="email" className="form-input" value={formValues.email} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor="text" className="form-label">Password</label>
                    <input type="text" name="password" className="form-input" value={formValues.password} onChange={handleInput}/>
                </div>
                <button type="submit">Send</button>
            </form>
            <h3>Phone: +254701374708</h3>
            <h3>Email address: sovereign.wawiye@gmail.com</h3>
            <h3>LinkedIn: Sovereign Wawiye</h3>
        </div>
    )
}
export default ReachOut;