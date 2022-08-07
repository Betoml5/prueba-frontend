import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

import foodTruckIcon from "../assets/static/food-truck.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png").default,
  iconUrl: require("leaflet/dist/images/marker-icon.png").default,
  shadowUrl: require("leaflet/dist/images/marker-shadow.png").default,
});

const myIcon = L.icon({
  iconUrl: foodTruckIcon,
  iconRetinaUrl: foodTruckIcon,
  popupAnchor: [0, -8],
  iconSize: [48, 48],
});

const FoodTrucksMap = ({ foodTrucks }) => {
  console.log("foodTrucks", foodTrucks);
  return (
    <div className="h-full">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", zIndex: 10 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {foodTrucks.map((foodTruck) => (
          <Marker
            position={[foodTruck.latitude, foodTruck.longitude]}
            icon={myIcon}
            key={foodTruck.objectid}
          >
            <Popup>{foodTruck?.applicant}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default FoodTrucksMap;
