import dotBlack from "./imag-DivAval/dotBlack.png";
import rectangle from "./imag-DivAval/rectangle.png";
const DivToo = () => {
  return (
    <div
      className="DivToo"
      style={{
        height: "660px",
        marginTop: "-100px",
      }}
    >
      <p
        className="div-too-clasess"
        style={{
          position: "absolute",
          fontSize: "50px",
          color: "black",
          marginTop: "50px",
          marginRight: "240px",
        }}
      >
        Our Yoga Classess
      </p>
      <img
        src={dotBlack}
        className="img-div-too-don"
        style={{
          position: "absolute",
          height: "150px",
          width: "150px",
          marginTop: "70px",
          marginRight: "1100px",
        }}
      />
      <img
        src={rectangle}
        className="img-div-too-big"
        style={{
          position: "absolute",
          width: "330px",
          height: "490px",
          marginRight: "870px",
          marginTop: "140px",
        }}
      />
    </div>
  );
};
export default DivToo;
