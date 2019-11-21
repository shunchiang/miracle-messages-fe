import React, { useState } from "react"
import { connect } from "react-redux"
import { addEmail } from "../../../Actions/ForgotPasswordActions.js"
import FormHeader from "../../FormHeader"
import FormFooter from "../../FormFooter"

const ForgotPasswordForm = props => {
  const [email, setEmail] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    props.addEmail(email)
    setEmail({
      email: ""
    })
  }

  return (
    <div className="container">
      <FormHeader />
      <section className="main">
        <strong className="main-bold">
          <h2>
            Forgot Your Password? <br />
            Please enter your email address below.
          </h2>
        </strong>

        <form className="form" onSubmit={handleSubmit}>
          <div className="formBox">
            <label>Email*</label>
          </div>
          <div className="formBox">
            <input
              className="input"
              name="email"
              type="text"
              value={email}
              onChange={event => setEmail(event.target.value)}
              loading={addEmail}
              required
            />
          </div>
          <button onClick="submit"> Submit </button>
        </form>
        <FormFooter />
      </section>
    </div>
  )
}

const mapStateTopProps = state => {
  return {
    email: state.volunteersReducer.status
  }
}

export default connect(mapStateTopProps, { addEmail })(ForgotPasswordForm)
