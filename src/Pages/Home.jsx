import Navigation from "./Navigation";

export default function Home() {
  return (
    <>
    <Navigation/>
      <div
        style={{
          backgroundImage: `url(/Banner.svg)`, 
          height: "80%",
          width: "100%",
          position: "absolute",
          top: "12%",
          left: "0",
          zIndex: "0",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontSize: "46px",
          position: "relative",
          zIndex: "1",
          fontWeight: "600",
          marginTop: "20%",
        }}
      >
        <span> Discover Exciting Events Happening</span>
        <span>Near You - Stay Tuned for Updates!</span>
        <span
          style={{
            fontSize: "16px",
            width: "50%",
            fontWeight: "normal",
            marginTop: "8px",
            textAlign:'center'
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          asperiores explicabo ad mollitia? Vel, optio illum. Iusto ipsam illo
          aut corporis perspiciatis harum.
        </span>
      </div>
    </>
  );
}
