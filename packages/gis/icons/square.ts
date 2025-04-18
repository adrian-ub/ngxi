import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisSquareIcon],svg[gis-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 10a3.5 3.5 0 0 0-3.5 3.5v73a3.5 3.5 0 0 0 3.5 3.5h73a3.5 3.5 0 0 0 3.5-3.5v-73a3.5 3.5 0 0 0-3.5-3.5z" color="currentColor"></svg:path>`,
})
export class GisSquareIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
