import  { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Recommended() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
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
        paddingLeft: "70px",
        marginTop: "70px",
        zIndex: "10",
        position: "relative",
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
          style={{ fontSize: "18px", fontWeight: "500", paddingRight: "14px" }}
        >
          Recommended Shows{" "}
        </span>
        <FaArrowRightLong size={20} />
      </div>
      <div
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {" "}
        <div style={{ display: "flex" }}>
          {events.map((event, index) => (
            <div
              key={index}
              style={{
                margin: "10px",
                minWidth: "240px",
                position: "relative",
              }}
            >
              <img
                src={event.imgUrl}
                alt={event.eventName}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  color: "white",
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    fontSize: "12px",
                    justifyContent: "space-between",
                  }}
                >
                  {" "}
                  <div>
                    <span>
                      {event.eventName.split(" ").slice(0, 2).join(" ")}
                    </span>
                    <p>{event.cityName}</p>
                  </div>
                  <div>
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                    <p>{event.weather}</p>
                    <p>
                      {typeof event.distanceKm === "string" &&
                      event.distanceKm.length > 2
                        ? `${event.distanceKm.substring(0, 2)} km`
                        : event.distanceKm}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
