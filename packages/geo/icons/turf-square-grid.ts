import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[geoTurfSquareGridIcon],svg[geo-turf-square-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="88.472" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="88.472" cy="88.472" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="50" cy="50" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="11.528" cy="88.472" r="5.824" fill="currentColor"></svg:circle><svg:circle cx="11.528" cy="11.528" r="5.824" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M48 40.382V12H21.328c-.241 5.04-4.288 9.087-9.328 9.328V48h28.382A9.85 9.85 0 0 1 48 40.382M59.618 48H88V21.328c-5.04-.241-9.087-4.288-9.329-9.328H52v28.382A9.85 9.85 0 0 1 59.618 48m-19.236 4H12v26.671c5.04.241 9.087 4.289 9.328 9.329H48V59.618A9.85 9.85 0 0 1 40.382 52M88 78.671V52H59.618A9.85 9.85 0 0 1 52 59.618V88h26.671c.241-5.04 4.289-9.088 9.329-9.329"></svg:path>`,
})
export class GeoTurfSquareGridIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
