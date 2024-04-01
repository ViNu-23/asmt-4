import Navigation from "./Navigation";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <>
      <Navigation/>
      <div
        style={{
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "0",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          src="./Banner.svg"
          alt="banner"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontSize: "5vw",
          position: "relative",
          zIndex: "1",
          fontWeight: "600",
          marginTop: "40vh",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <span>Discover Exciting Events Happening</span>
        <span>Near You - Stay Tuned for Updates!</span>
        <span
          style={{
            fontSize: isMobile ? "16px" : "20px",
            fontWeight: "normal",
            marginTop: "10px",
            width: "70vw",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          asperiores explicabo ad
        </span>
      </div>
    </>
  );
}
