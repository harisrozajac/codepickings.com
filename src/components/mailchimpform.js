import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React from "react"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ result: result["result"] })
  }
  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return this.state.result === "success" ? (
      <div
        style={{
          borderStyle: "solid",
          padding: "1em 1em",
          backgroundColor: "blue",
          color: "white",
        }}
      >
        You're all set! Thank you for subscribing to my newsletter!
      </div>
    ) : this.state.result === "error" ? (
      <div
        style={{
          borderStyle: "solid",
          padding: "1em 1em",
          backgroundColor: "red",
          color: "white",
        }}
      >
        Ops! You might have already used this email address to sign up or your
        email address is incorrect.
        <Button
          style={{ backgroundColor: "blue", color: "white", marginLeft: "1em" }}
          onClick={() => window.location.reload(false)}
        >
          Try Again
        </Button>
      </div>
    ) : (
      <form onSubmit={this._handleSubmit}>
        <h3>{this.props.text}</h3>
        <TextField
          id="outlined-email-input"
          label="Type your email address"
          type="email"
          name="email"
          autoComplete="email"
          variant="outlined"
          onChange={this.handleChange}
          style={{ marginBottom: "1em", width: "15em" }}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          label="Submit"
          type="submit"
        >
          <Typography variant="button">Subscribe</Typography>
        </Button>
        <p style={{ marginTop: "1em" }}>
          I won’t send you spam or share your information with anyone.
          <br />
          <span style={{ fontStyle: "italic" }}> Unsubscribe</span> at any time.
        </p>
      </form>
    )
  }
}
