import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPolygonIcon],svg[oui-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11v4h-4v-1.5H5V15H1v-4h1.5V5H1V1h4v1.3h6V1h4v4h-2.9l-.8 1h.7v4h-.8l.8 1zm-1 3v-2h-2v2zm0-10V2h-2v2zm-3 8.5v-1.2L10 10H8V6h2l1-1.3V3.3H5V5H3.5v6H5v1.5zM11 9V7H9v2zm-7 5v-2H2v2zM4 4V2H2v2z"></svg:path>`,
})
export class OuiPolygonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
