import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

// Gaya vektor tanpa tile eksternal: kanvas gelap + poligon contoh desa.
// Tile OSM dapat ditambahkan nanti di host produksi.
function styleFor(desa) {
  return {
    version: 8,
    glyphs: undefined,
    sources: {
      desa: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: desa.map((d) => ({
            type: 'Feature',
            id: d.id,
            properties: { id: d.id, nama: d.nama, jenis: d.jenis, status: d.status },
            geometry: {
              type: 'Polygon',
              coordinates: [[...d.poligon, d.poligon[0]]],
            },
          })),
        },
      },
    },
    layers: [
      { id: 'bg', type: 'background', paint: { 'background-color': '#0E1B24' } },
      {
        id: 'desa-fill',
        type: 'fill',
        source: 'desa',
        paint: {
          'fill-color': [
            'match',
            ['get', 'status'],
            'Aman',
            '#2FBF9B',
            'Waspada',
            '#E8B04B',
            'Rawan',
            '#E06C5A',
            '#2FBF9B',
          ],
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'selected'], false],
            0.45,
            0.18,
          ],
        },
      },
      {
        id: 'desa-line',
        type: 'line',
        source: 'desa',
        paint: { 'line-color': '#E9F1F4', 'line-width': 1, 'line-opacity': 0.35 },
      },
    ],
  }
}

export default function MapCanvas({ desaList, selectedId, onSelect }) {
  const container = useRef(null)
  const mapRef = useRef(null)
  const selectedRef = useRef(selectedId)

  selectedRef.current = selectedId

  useEffect(() => {
    const map = new maplibregl.Map({
      container: container.current,
      style: styleFor(desaList),
      center: [117.0, -1.7],
      zoom: 5.2,
      attributionControl: false,
    })
    mapRef.current = map
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right')

    map.on('load', () => {
      desaList.forEach((d) => {
        map.addMarker
        new maplibregl.Marker({ color: d.jenis === 'pesisir' ? '#2FBF9B' : '#7CC24D' })
          .setLngLat(d.pusat)
          .setPopup(
            new maplibregl.Popup({ offset: 12 }).setHTML(
              `<strong>${d.nama}</strong><br/>Status: ${d.status}`,
            ),
          )
          .addTo(map)
      })
      map.on('click', 'desa-fill', (e) => {
        const id = e.features?.[0]?.properties?.id
        if (id) onSelect(id)
      })
      map.on('mouseenter', 'desa-fill', () => (map.getCanvas().style.cursor = 'pointer'))
      map.on('mouseleave', 'desa-fill', () => (map.getCanvas().style.cursor = ''))
    })

    return () => map.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !map.isStyleLoaded()) return
    const d = desaList.find((x) => x.id === selectedId)
    if (d) map.flyTo({ center: d.pusat, zoom: 8, essential: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId])

  return <div className="map-canvas" ref={container} role="application" aria-label="Peta desa" />
}
