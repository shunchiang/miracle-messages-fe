import React from "react"
import "./FormFooter.scss"
import { FaFacebookF } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { FaYoutube } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const FormFooter = () => {
  return (
    <div>
      <div className="footer-icons">
        <div className="icon-div">
          <a
            action="https://mailthis.to/hello@miraclemessages.com"
            method="GET"
          >
            <GoMail
              style={{
                fontSize: "35px",
                textDecoration: "none",
                margin: "5px",
                color: "white",
                cursor: "pointer"
              }}
            />
          </a>
          <a href="https://www.facebook.com/miraclemessages">
            <FaFacebookF
              style={{
                fontSize: "35px",
                textDecoration: "none",
                margin: "5px",
                color: "white",
                cursor: "pointer"
              }}
            />
          </a>
          <a href="https://www.youtube.com/miraclemessages">
            <FaYoutube
              style={{
                fontSize: "35px",
                textDecoration: "none",
                margin: "5px",
                color: "white",
                cursor: "pointer"
              }}
            />
          </a>
          <a href="https://twitter.com/miraclemessages">
            <FaTwitter
              style={{
                fontSize: "35px",
                textDecoration: "none",
                margin: "10px",
                color: "white",
                cursor: "pointer"
              }}
            />
          </a>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="footer-phone-email">
          <span className="phone">1-800-MISS-YOU </span>
          <span className="email">HELLO @MIRACLEMESSAGES.ORG </span>
        </div>
        <p className="footer">
          © 2019. Miracle Messages is a fiscally sponsored project of Netroots
          Foundation, a CA 501(c)3 <br />
          corporation.EIN #20-8672843.
        </p>
        <p className="footer">
          MIRACLE MESSAGES is a trademark of Miracle Messages.
        </p>
        <a
          href="https://www.classy.org/give/231839/#!/donation/checkout"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>DONATE</div>
        </a>
      </div>
    </div>
  )
}

export default FormFooter
