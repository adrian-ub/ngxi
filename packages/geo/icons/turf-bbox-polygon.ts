import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[geoTurfBboxPolygonIcon],svg[geo-turf-bbox-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.445 87.445h-70.89a2 2 0 0 1-2-2v-70.89a2 2 0 0 1 2-2h70.891a2 2 0 0 1 2 2v70.891a2 2 0 0 1-2.001 1.999m-68.89-4h66.891v-66.89H16.555z"></svg:path>`,
})
export class GeoTurfBboxPolygonIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
