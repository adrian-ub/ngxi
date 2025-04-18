import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisRegularShapeIcon],svg[gis-regular-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.1 11.502a3.5 3.5 0 0 0-2.157.666L11.141 38.906a3.5 3.5 0 0 0-1.27 3.912l14.057 43.264a3.5 3.5 0 0 0 3.328 2.418h45.488a3.5 3.5 0 0 0 3.328-2.418L90.13 42.818a3.5 3.5 0 0 0-1.27-3.912L52.057 12.168a3.5 3.5 0 0 0-1.957-.666" color="currentColor"></svg:path>`,
})
export class GisRegularShapeIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
