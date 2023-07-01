const DivMostPopular = () => {
    const MostPopular = [
      {
        month:"One Month",
        ringgit: "RM 150",
        button : "Get Started",
        popular:"Most Popular",
      },
      {
        month:"One Year",
        ringgit: "RM 1,350",
        button : "Get Started",
        popular:"Most Popular",
        life: "life",
    },
    {
        month:"Six Month ",
        // life: "life",
        ringgit: "RM 810",
        button : "Get Started",
        popular:"Most Popular",    

      },
    ];
  
    let MostPopularList = MostPopular.map((Most, index) => (
      <div
      key={index}
        style={{
        
          width: "250px",
          height: "400px",
          borderRadius: "5px",
          backgroundColor: "white",
          
          marginRight: "65px",
          marginTop: "-450px",
         marginRight: "155px",
        }}
      >
        
        <p
          style={{
            position: "absolute",
            fontSize: "20px",
            marginTop: "100px",
            fontFamily: "Arial, Helvetica, sans-serif",
            marginRight: "70px",
          }}
        >
          {Most.month}
        </p>
        {Most.life?
        <button
        style={{
          position: "absolute",
          width: "300px",
          height: "60px",
          marginTop: "-100px",
          backgroundColor: "#2E4CFF",

          color: "white",
          border: "none",
          borderRadius: "10px 10px 0px 0px",
          cursor: "pointer",
        }}
      >
        Most Popular 
      </button>:<></>}

        <p
          style={{
            position: "absolute",
            fontSize: "40px",
            marginTop: "200px",
            fontFamily: "Arial, Helvetica, sans-serif",
            marginRight: "45px",
          }}
        >
          {Most.ringgit}
        </p>
  
        <button
          style={{
            borderRadius:"10px",
            width: "100px",
            height: "40px",
            marginTop: "300px",
            backgroundColor: "#2E4CFF",
            marginRight: "65px",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {Most.button}
          </button>
        
      </div>
    ));
    return <div style={{ display: "flex", flexDirection: "row" , }}>{MostPopularList}</div>;
  };
  
  export default DivMostPopular;
