const NavbarDivFive = () => {


    return (
      <nav className="navbar"
        style={{
         position : "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          direction: "rtl",
          marginRight: "435px",
          marginTop: "770px",
          
        }}
      >
        <ul style={{
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            gap: "1.5remMozAnimation",
            padding: "0rem 2rem",
          }}
        >
          <li className="">
            <a href="proful/index.html">PROFILE</a>
          </li>
          <li>
            <a href="homePage/homePage.html">HOME</a>
          </li>
          <li>
            <a href="login/login.html">LOGIN</a>
          </li>
          <li>
            <a href="explor/explor.html">EXPLOR</a>
          </li>
          <li>
            <a href="aboutUs/aboutUs.html">ABOUT US</a>
          </li>
        </ul>
      </nav>
    );
  };
  export default NavbarDivFive;
  