import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisCircleIcon],svg[gis-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 5C25.189 5 5 25.189 5 50s20.189 45 45 45s45-20.189 45-45S74.811 5 50 5" color="currentColor"></svg:path>`,
})
export class GisCircleIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
