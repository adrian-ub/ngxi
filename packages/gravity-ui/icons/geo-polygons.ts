import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiGeoPolygonsIcon],svg[gravity-ui-geo-polygons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h5.793L7.77 6.965L3.09 3.987A1.5 1.5 0 0 1 4.5 3m7 10H5.707l2.926-4.597l3.38-5.313A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5m-7-11.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGeoPolygonsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
