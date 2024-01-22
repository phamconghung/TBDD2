// GeolocationService.js
import { useEffect } from 'react';
import { Geolocation, PermissionsAndroid, Platform } from 'react-native';

const useGeolocation = (onLocationChange) => {
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'App needs access to your location for better services.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
          } else {
            console.log('Location permission denied');
          }
        } else {
          getLocation();
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const getLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationChange({ latitude, longitude });
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );

      const watchId = Geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onLocationChange({ latitude, longitude });
        },
        (error) => {
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
      );

      return () => {
        Geolocation.clearWatch(watchId);
      };
    };

    requestLocationPermission();
  }, [onLocationChange]);
};

export default useGeolocation;
