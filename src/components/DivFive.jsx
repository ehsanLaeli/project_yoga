import Nice from "./profilDivTree/Nice.png";
import Vector from "./profilDivTree/Vector.png";
import youtube1 from "./profilDivTree/youtube1.png";
import NavbarDivFive from "./NavbarDivFive";
import Navbar  from "./Navbar";
const DivFive = () => {
  return (
    <div
      style={{
        height: "660px",
        display: "flex",

      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgb(255, 255, 255)",
          width: "550px",
          height: "130px",
          marginRight: "400px",
          marginTop: "90px",
          borderRadius: "10px",
          boxShadow: "0px 25px 25px rgba(0, 0, 0, 0.18)",
        }}
      >
        <p style={{
            position: "absolute",
            fontSize: "25px",
            fontFamily: "Arial, Helvetica, sans-serif",
            marginRight: "220px",
            marginTop: "35px",
        }}>Have any question about us </p>
        <button style={{
            position: "absolute",
            width: "120px",
            height: "41px",
            marginRight: "20px",
            marginTop: "50px",
            backgroundColor: "#2E4CFF",
            border: "none",
            color :"white",
            borderRadius: "8px",
            cursor: "pointer",
        }}>Send Email</button>

        <p style={{
            position: "absolute",
            fontSize: "12px",
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "rgba(0, 0, 0, 0.289)",
            marginTop: "90px",
            marginRight:"410px",
        }}>Jast drop us an email</p>
      </div>

        <div style={{
            position: "absolute",
            margin: "0px",
            padding: "0px",
            backgroundColor: "#2E4CFF",
            width: "100%",
            height: "420px",
            marginTop: "300px",

        }}>
            <p style={{
                position: "absolute",
                fontSize: "30px",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontStyle: "bold",
                color: "rgb(255, 255, 255)",
                marginRight: "600px",
                marginTop: "130px",
            }}>Quick Explore</p>
            <img src={Nice} style={{
                position:"absolute",
                width: "150px",
                height: "150px",
                marginTop: "130px",
                marginRight:"1060px",
            }}/>
            
            <p style={{
                fontSize: "15px",
                marginRight: "580px",
                marginTop: "300px",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "white",
            }}>Designed by Rostam Sadiqi 2021</p>
            <p style={{
                position: "absolute",
                fontSize: "30px",
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "rgb(255, 255, 255)",
                marginRight: "100px",
                marginTop: "-205px",
            }}>Stay Connected</p>

            <img src={Vector} style={{
                position : "absolute",
                  marginTop: "-120px",
                  marginRight: "220px",
            }} />
            <img src={youtube1} style={{
              position : "absolute",
               marginTop:"-120px",
               marginRight: "130px",
            }}/>
              <NavbarDivFive/>
        </div>
    </div>
  );
};
export default DivFive;
