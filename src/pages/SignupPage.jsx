import {Header, Signup} from "../components/Auth";

export default function SignupPage(){
    return(
        <>
            <h1 className="text-center">Account creation is by invitation <br />[contact: info@rawfinancial.fund]</h1>
            <Header
              heading=""
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            {/* <Signup/> */}
        </>
    )
}