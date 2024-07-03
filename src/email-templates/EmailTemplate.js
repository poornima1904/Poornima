import React from "react";

const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <p style={heading}>Here's what {name} has written:</p>

      <p style={paragraph}>"{message}"</p>
      <div style={hr}></div>

      <p style={subheading}>Sender's Email</p>
      <a style={link} href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
};

export default EmailTemplate;

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
  margin: "16px 0",
};
const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
  margin: "16px 0",
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const hr = {
  border: "none",
  borderBottom: "1px solid #cccccc",
  margin: "20px 0",
};

const subheading = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
  margin: "16px 0",
  fontWeight: "700",
};

const link = {
  color: "#38BDF8",
  fontSize: "18px",
  lineHeight: "1.4",
  textDecoration: "none",
};
