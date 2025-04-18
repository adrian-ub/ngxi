import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisPolygonOIcon],svg[gis-polygon-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.162 19.463a3.5 3.5 0 0 0-3.111 1.974L9.34 64.239a3.5 3.5 0 0 0 2.632 4.985l75.015 11.275a3.5 3.5 0 0 0 3.846-4.55L76.566 32.456a3.5 3.5 0 0 0-2.431-2.293l-40.04-10.586a3.5 3.5 0 0 0-.933-.115m1.934 7.621l35.412 9.361l11.904 36.287l-64.7-9.724z" color="currentColor"></svg:path>`,
})
export class GisPolygonOIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
