const Button = () =>{
    return(
    <>
    <button className="button-contact-us" style={{
         position :"absolute",
         width: "120px",
         height: "41px",
         top: "-640px",
         marginRight: "100px",
         borderRadius: "10px",
         padding: "10px 20px",
         fontSize: "15px",
         border: "none",
         position: "relative",
         cursor: "pointer",
         overflow: "hidden",
         background: "#ffffff",
         borderRadius: "7px",
         color: "#2E4CFF",
         textDecoration: "none",
    }}>Contact Us</button>

    <button className="button-get-started" style={{
         position: "absolute",
         width: "120px",
         height: "41px",
         top: "-270px",
         marginRight:" 1130px",
         borderRadius: "10px",
         padding: "10px 20px",
         fontSize: "15px",
         border: "none",
         position: "relative",
         cursor: "pointer",
         overflow: "hidden",
         background: "#ffffff",
         borderRadius: "7px",
         color: "#2E4CFF",
         textDecoration: "none",
    }}>Get Started</button>

    <button className="button-sign-in" style={{
          position: "absolute",
          width: "120px",
          height: "41px",
          top: "-311px",
          marginRight: "980px",
          borderRadius: "10px",
          padding: "10px 20px",
          fontSize: "15px",
          border: "none",
          position: "relative",
          cursor: "pointer",
          overflow: "hidden",
          background: "#ffffff",
          borderRadius: "7px",
          color: "#2E4CFF",
          textDecoration: "none",
    }}>Sign in</button>
    </>
    )
}
export default Button;