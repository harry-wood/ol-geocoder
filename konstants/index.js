import ol from 'openlayers';
import * as _VARS_ from './vars.json';

export const VARS = _VARS_;

export const EVENT_TYPE = {
  ADDRESSCHOSEN: 'addresschosen'
};

export const CONTROL_TYPE = {
  NOMINATIM: 'nominatim',
  REVERSE: 'reverse'
};

export const TARGET_TYPE = {
  GLASS: 'glass-button',
  INPUT: 'text-input'
};


export const FEATURE_STYLE = [
  new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 1],
      scale: .7,
      src: '//cdn.rawgit.com/jonataswalker/map-utils/master/images/marker.png'
    })
  })
];

export const PROVIDERS = {
  OSM: 'osm',
  MAPQUEST: 'mapquest',
  GOOGLE: 'google',
  PHOTON: 'photon',
  BING: 'bing',
  PELIAS: 'pelias'
};

export const DEFAULT_OPTIONS = {
  provider: PROVIDERS.OSM,
  placeholder: 'Search for an address',
  featureStyle: FEATURE_STYLE,
  targetType: TARGET_TYPE.GLASS,
  lang: 'en-US',
  limit: 5,
  keepOpen: false,
  preventDefault: false,
  autoComplete: false,
  autoCompleteMinLength: 2,
  debug: false
};
