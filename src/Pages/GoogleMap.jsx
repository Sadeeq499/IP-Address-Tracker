import React, { useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import Images from "../assets/Images";

const MapWithMarker = ({ google }) => {
  const city = "Peshawar"; // Specify the city name here

  useEffect(() => {
    // Additional setup or initialization can be performed here
    <GoogleApiWrapper />;
  }, []);

  return (
    <Map
      google={google}
      zoom={16}
      initialCenter={{ lat: 34.015, lng: 71.525 }} // Specify the latitude and longitude of the city location
      style={{ width: "100%", height: "525px" }}
    >
      <Marker
        position={{ lat: 34.015, lng: 71.525 }} // Specify the latitude and longitude of the city location
        title={city}
        icon={{
          url: Images.Arrow, // Replace with the path to your own arrow image
          anchor: new google.maps.Point(16, 16),
          scaledSize: new google.maps.Size(32, 32),
        }}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "", // Replace with your actual Google Maps API key
})(MapWithMarker);
