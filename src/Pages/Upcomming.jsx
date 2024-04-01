import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
export default function Upcomming() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"
        );
        if (Array.isArray(response.data.events)) {
          // Convert Google Drive links to direct download links
          const modifiedEvents = response.data.events.map((event) => ({
            ...event,
            imgUrl: getDirectDownloadLink(event.imgUrl),
          }));
          setEvents(modifiedEvents);
        } else {
          setError("Invalid data format");
        }
      } catch (error) {
        setError("Failed to fetch data");
      }
    };

    fetchEvents();
  }, []);

  // Function to convert Google Drive sharing link to direct download link
  const getDirectDownloadLink = (driveLink) => {
    const fileId = driveLink.match(/[-\w]{25,}/);
    if (fileId) {
      return `https://drive.google.com/thumbnail?id=${fileId}`;
    } else {
      console.error("Invalid Google Drive link:", driveLink);
      return driveLink;
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      style={{
        padding: "70px",
        zIndex: "10",
      }}
    >
      <div
        style={{
          color: "#fff",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <span
          style={{ fontSize: "18px", fontWeight: "500", paddingRight: "14px",color:'#1E2022' }}
        >
          Upcoming events{" "}
        </span>
        <FaArrowRightLong size={20} style={{color:'#1E2022'}}/>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {events.map((event, index) => (
          <div
            key={index}
            style={{
              width: "30%",
              margin: "10px",
              borderRadius: "8px",
              border: "1px solid #B0BABF",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={event.imgUrl}
                alt={event.eventName}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px 8px 0 0",
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px", 
                  left: "14px",
                  right: "14px",
                  zIndex: "1",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "10px 10px",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              >
                {new Date(event.date).toLocaleDateString()}
              </div>
            </div>
            <div
              style={{
                padding: "0px 16px",
                fontSize: "12px",
                paddingBottom: "16px",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontSize: "16px", fontWeight: "600" ,marginBottom:'6px',color:'#1E2022'}}>
                {event.eventName.split(" ").slice(0, 2).join(" ")}
              </div>
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <div style={{ color: "#989090" }}>
                    <FaLocationDot style={{ paddingRight: "4" }} />
                    {event.cityName}
                  </div>
              <div style={{ color: "#989090",display:'flex' }}>
                <span style={{margin:'0px 4px'}}>{event.weather}</span> | 
                <span style={{ margin:'0px 4px'  }}>
                    {typeof event.distanceKm === "string" &&
                    event.distanceKm.length > 2
                      ? `${event.distanceKm.substring(0, 2)} km`
                      : event.distanceKm}
                </span>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
