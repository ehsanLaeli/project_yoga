import { PURPLE, BACKGROUND } from "../helpers/colors";
import Dot from "./imag-DivAval/Dot.png";
import photo from "./imag-DivAval/photo.png";
import logotop from "./imag-DivAval/logotop.png";
const DivAval = () => {
  return (
    <div className="divAval" style={{ height: "680px", backgroundColor: "#2E4CFF", margin:"0px" , padding: "0px"}}>
      <img
        src={Dot}
        className="imag-div-aval"
        style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          marginTop: "150px",
          marginRight: "100px",
        }}
      />
      <img
        src={photo}
        className="img-div-aval-photo"
        style={{
          boxSizing: "border-box",
          position: "absolute",
          width: "316px",
          height: "396px",
          marginTop: "190px",
          marginRight: "140px",
        }}
      />

      <p className="Pragrag-yoga">
        Yoga teaches you how <br />
        to listen to your body
      </p>
      <p className="pragraf-smal">
        Slow movements and deep breathing increase blood <br />
        flow and warm up muscles, while holding a pose can <br />
        build strength.
      </p>

      <img src={logotop} className="logotop"  style={{
        marginRight: "1185px",
        marginTop: "66px",
      }}/>
    </div>
  );
};

export default DivAval;

// alt shift   f
