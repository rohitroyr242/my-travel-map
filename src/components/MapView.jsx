import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import places from '../data/places.json';
import PlaceInfo from './PlacesInfo';

// Fix for default marker icons not showing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapView = () => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
      scrollWheelZoom={false}
      maxBounds={[[85, -180], [-85, 180]]}
      maxBoundsViscosity={1.0}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {places.map(place => (
        <Marker key={place.id} position={place.coordinates}>
          <Popup>
            <PlaceInfo place={place} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
