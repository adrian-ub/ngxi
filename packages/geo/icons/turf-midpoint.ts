import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[geoTurfMidpointIcon],svg[geo-turf-midpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="49.331" cy="50.493" r="6.845" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M85.331 23.338c-4.877 0-8.845-3.968-8.845-8.845s3.968-8.845 8.845-8.845s8.845 3.968 8.845 8.845s-3.968 8.845-8.845 8.845m0-13.69a4.85 4.85 0 0 0-4.845 4.845c0 2.671 2.173 4.845 4.845 4.845s4.845-2.173 4.845-4.845a4.85 4.85 0 0 0-4.845-4.845m-71 84.69c-4.877 0-8.845-3.968-8.845-8.845s3.968-8.845 8.845-8.845s8.845 3.968 8.845 8.845s-3.968 8.845-8.845 8.845m0-13.69c-2.672 0-4.845 2.173-4.845 4.845s2.173 4.845 4.845 4.845s4.845-2.173 4.845-4.845s-2.174-4.845-4.845-4.845"></svg:path>`,
})
export class GeoTurfMidpointIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
