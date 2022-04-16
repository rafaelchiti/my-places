import type { NextPage } from "next";
import * as React from "react";
import Map, {
  Source,
  Layer,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

const Home: NextPage = () => {
  const mapContainer = React.useRef(null);
  return (
    <div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
        initialViewState={{
          longitude: 2.1980233,
          latitude: 41.394679,
          zoom: 14,
        }}
        style={{ height: 400 }}
        mapStyle="mapbox://styles/mapbox/light-v10"
      >
        <FullscreenControl />
        <GeolocateControl />
        <NavigationControl />

        <Source id="my-data" type="geojson" data={geojson}>
          <Layer type="circle" paint={layerStyle.paint} id="point" />
        </Source>
      </Map>
    </div>
  );
};

export default Home;

const geojson: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: [],
      geometry: { type: "Point", coordinates: [2.1980233, 41.394679] },
    },
  ],
};

const layerStyle = {
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};
