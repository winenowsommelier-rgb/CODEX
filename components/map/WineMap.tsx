'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import type { GeographyNode, Lang } from '@/lib/data';
import { buildGeoJson } from '@/lib/map';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

export function WineMap({ nodes, lang }: { nodes: GeographyNode[]; lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const map = new mapboxgl.Map({
      container: ref.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.0, 46.0],
      zoom: 2
    });

    map.on('load', () => {
      map.addSource('wine-regions', {
        type: 'geojson',
        data: buildGeoJson(nodes) as GeoJSON.FeatureCollection
      });

      map.addLayer({
        id: 'wine-points',
        type: 'circle',
        source: 'wine-regions',
        paint: {
          'circle-radius': 6,
          'circle-color': '#7a1f3d',
          'circle-stroke-width': 1,
          'circle-stroke-color': '#ffffff'
        }
      });

      map.on('click', 'wine-points', (e) => {
        const props = e.features?.[0]?.properties;
        if (!props) return;
        const name = lang === 'th' ? props.name_th : props.name_en;
        new mapboxgl.Popup().setLngLat((e.features?.[0].geometry as any).coordinates).setHTML(`<strong>${name}</strong>`).addTo(map);
      });

      map.on('mouseenter', 'wine-points', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'wine-points', () => {
        map.getCanvas().style.cursor = '';
      });
    });

    return () => map.remove();
  }, [lang, nodes]);

  return <div ref={ref} style={{ width: '100%', height: 420, borderRadius: 12, overflow: 'hidden' }} />;
}
