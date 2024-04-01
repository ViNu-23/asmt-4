import { useMediaQuery } from "react-responsive";
import { FaListUl, FaLocationDot, FaChevronRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import "../Globalstyle.css";
export default function Navigation() {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
    
     <div style={{
        position: "fixed",
        padding:!isMobile?'20px 0px':'15px 10px',
        zIndex: "200",
        background: "#fff",
        top: "0",
        left: "0",
        right: "0",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: !isMobile? "0px 30px":'',
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{ fontSize: "16px", fontWeight: "800" }}
            className="logo_text"
          >
            Book Us Now
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "-17px",
              marginTop: "4px",
            }}
          >
            <FaLocationDot size={14} />
            <span
              style={{
                marginLeft: "5px",
                marginRight: "5px",
                verticalAlign: "middle",
                fontSize: "14px",
              }}
            >
              Mumbai, India
            </span>
            <FaChevronRight size={12} />
          </div>
        </div>

       {
        !isMobile  &&(
          <div style={{ display: "flex", alignItems: "center", color: "#fff" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 14px",
              background: "#000",
              color: "#fff",
              borderRadius: "6px",
            }}
          >
            <FaListUl />
            <span style={{ padding: "0px 10px" }}>Categories</span>
          </div>
          <div className="search-container" style={{ marginLeft: "20px" }}>
            <input
              type="text"
              placeholder="DJI phantom"
              className="search-input"
            />
          </div>
        </div>
        )
       } 
       {
        !isMobile && (
          <div style={{ display: "flex", alignItems: "center" }}>
          <button
            type="button"
            style={{ display: "flex", alignItems: "center" }}
            className="fav_btn"
          >
            <FaHeart size={16} />
            <span style={{ padding: "0px 8px" }}>Favorites</span>
          </button>

          <button
            type="button"
            className="signin-button"
            style={{ marginLeft: "8px" }}
          >
            Sign In
          </button>
        </div>
        )

       }
        

        
      </div>

      <div style={{display:'flex',color:'#000',marginTop:isMobile?'0px':'10px',justifyContent:'center',alignItems:'center'}}>
        <span className="event_type">Live show</span>
        <span className="event_type">Stream</span>
        <span className="event_type">Movies</span>
        <span className="event_type">Plays</span>
        <span className="event_type">Events</span>
        <span className="event_type">Sports</span>
        <span className="event_type">Activities</span>
      </div>
     </div>
    </>
  );
}
