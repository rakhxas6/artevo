import React from "react";
import { useNavigate } from "react-router-dom";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const dialogStyle = {
  padding: "2rem",
  borderRadius: "8px",
  backgroundColor: "rgba(0,0,0,0.7)",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  position: "relative",
};

const textStyle = {
  color: "#fff",
  fontSize: "1.8rem",
  padding: "1rem",
  borderRadius: "10px",
  marginBottom: "1.5rem",
  lineHeight: "1.4",
};

const buttonStyle = {
  outline: "none",
  border: "none",
  height: "50px",
  width: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  fontSize: "16px",
  color: "white",
  background: "#8e2de2",
  borderBottom: "3px solid #6516aa",
};

const cancelButtonStyle = {
  position: "absolute",
  top: "40px",
  right: "60px",
  backgroundColor: "#ff4d4d",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  fontSize: "20px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  transform: "translate(50%, -50%)",
};

const PaymentPendingDialog = () => {
   const navigate = useNavigate();

  const onClose = () => {
    navigate("/");
  };
  return (
    <div style={overlayStyle} >
      <div style={dialogStyle} onClick={(e) => e.stopPropagation()}>
        {/* Cancel (X) button */}
        <button style={cancelButtonStyle} onClick={onClose}>
          <span
            style={{ fontSize: "40px", position: "absolute", bottom: "-4px" }}
          >
            ×
          </span>
        </button>

        <h2 style={textStyle}>
          We are working on the payment integration part
        </h2>
        <button style={buttonStyle} onClick={onClose}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentPendingDialog;
