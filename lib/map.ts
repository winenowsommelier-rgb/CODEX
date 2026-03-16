import type { GeographyNode } from './data';

export function toMapFeature(node: GeographyNode) {
  return {
    type: 'Feature',
    properties: {
      id: node.id,
      name_en: node.name_en,
      name_th: node.name_th,
      type: node.type
    },
    geometry: {
      type: 'Point',
      coordinates: node.center
    }
  };
}

export function buildGeoJson(nodes: GeographyNode[]) {
  return {
    type: 'FeatureCollection',
    features: nodes.map(toMapFeature)
  };
}
