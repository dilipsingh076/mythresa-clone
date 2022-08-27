import "./Login_Signup.css"
// import { Signin } from "./Signin";
// import { SignUp } from "./SignUp";
// export const Login_Signup = () => {
//     return <div className="Auth">
//         <div><SignUp /></div>
//         <div className="line"></div>
//         <div><Signin /></div>
//     </div>
// }
import { SignUp } from "./SignUp"
import { Signin } from "./Signin"
function Login_Signup() {

    return (
        <div className="Auth" >
            <div> <SignUp /> </div>
            <div className="line" ></div>
            <div> <Signin /> </div>
        </div>

    )
}
export default Login_Signup