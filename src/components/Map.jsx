import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ location, zoomLevel }) => {
  const location = {
    address: "Alabang–Zapote Rd, Las Piñas, 1747 Metro Manila",
    lat: 14.442555512443139,
    lng: 120.99828253775823,
  };

  return (
    <div className="map">
      <div className="w-full h-screen">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD3GG7Qq1XgRMAcjPejT9spgnR4RZ9xzbU" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
