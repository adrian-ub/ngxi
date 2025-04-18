import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisCircleOIcon],svg[gis-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 5C25.189 5 5 25.189 5 50s20.189 45 45 45s45-20.189 45-45S74.811 5 50 5m0 7c21.028 0 38 16.972 38 38S71.028 88 50 88S12 71.028 12 50s16.972-38 38-38m-2.732 27.5v7.768H39.5v5.464h7.768V60.5h5.464v-7.768H60.5v-5.464h-7.768V39.5z" color="currentColor"></svg:path>`,
})
export class GisCircleOIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
