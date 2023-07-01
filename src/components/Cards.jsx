import EllipseOn from "./profilDivTree/EllipseOn.png";
import twitter from "./profilDivTree/twitter.png";
import youtube from "./profilDivTree/youtube.png";
import EllipseToo from "./profilDivTree/EllipseToo.png";
import Ellipsefour from "./profilDivTree/Ellipsefour.png";
import Ellipsefaiv from "./profilDivTree/Ellipsefaiv.png";

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const Cards = () => {
  const UserBiography = [
    {
      image: EllipseOn,
      name: "Jennifer Smith",
      AboutName: "Jennifer Smith",
      time: "Joined July 2020",
    },
    {
      image: Ellipsefaiv,
      name: "Jennifer ston",
      AboutName: "Jennifer Smith",
      time: "Joined July 2020",
    },
    {
      image: EllipseToo,
      name: "kevin Smith",
      AboutName: "Jennifer Smith",
      time: "Joined July 2020",
    },
    {
      image: Ellipsefour,
      name: "kevin ston",
      AboutName: "Jennifer Smith",
      time: "Joined July 2020",
    },
  ];

  let CrdList = UserBiography.map((cart, index) => (
    <div
      key={index}
      style={{
        width: "250px",
        height: "400px",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.18)",
        marginRight: "65px",
        marginTop: "-500px",
      }}
    >
      <img
        src={cart.image}
        style={{
          marginRight: "60px",
          marginTop: "30px",
        }}
      />
      <p
        style={{
          position: "absolute",
          fontSize: "25px",
          marginTop: "20px",
          fontFamily: "Arial, Helvetica, sans-serif",
          marginRight: "45px",
        }}
      >
        {cart.name}
      </p>

      <p
        style={{
          position: "absolute",
          fontSize: "15px",
          fontFamily: "Arial, Helvetica, sans-serif",
          marginRight: "75px",
          marginTop: "60px",
          color: "rgba(0, 0, 0, 0.41)",
        }}
      >
        {cart.AboutName}
      </p>

      <img
        src={twitter}
        style={{
          position: "absolute",
          marginTop: "270px",
          marginRight: "-40px",
        }}
      />
      <img
        src={youtube}
        style={{
          position: "absolute",
          marginTop: "270px",
          marginRight: "-100px",
        }}
      />
      <p
        style={{
          fontSize: "10px",
          marginTop: "210px",
          marginRight: "90px",
          color: "rgba(0, 0, 0, 0.41)",
        }}
      >
        {cart.time}
      </p>
    </div>
  ));
  return <div style={{ display: "flex", flexDirection: "row" }}>{CrdList}</div>;
};

// ------------------------------------------------

export default Cards;
