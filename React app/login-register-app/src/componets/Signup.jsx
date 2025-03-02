import React from "react";
import { Link } from "react-router-dom";
import { IconArrowNarrowRight } from '@tabler/icons-react';

const Signup = () => {
    return(
        <form className="box-container register-container">
            <div className="form-title">
                <span>Welcome Back</span>
                <p>Please Enter your Account details</p>
            </div>
            <div className="error-message">Error Message</div>
            <div className="form-inputs">
                <div className="input-box">
                    <input type="text" className="inputs input-field" placeholder="Name" />
                </div>
                <div className="input-box">
                    <input type="text" className="inputs input-field" placeholder="Email" />
                </div>
                <div className="input-box">
                    <input type="text" className="inputs input-field" placeholder="Phone" />
                </div>
                <div className="input-box">
                    <input type="password" className="inputs input-field" placeholder="Password" />
                </div>
            </div>
            <div className="input-box">
                <button type="submit" className="inputs btn submit-btn">
                    <span>Sign Up</span>
                    <IconArrowNarrowRight size={20} />
                </button>
            </div>
            <div className="form-bottom-links">
                <span>Already have an account? <Link to="/signin" className="bottom-link">Sign In</Link></span>
            </div>
        </form>
    )
}

export default Signup;