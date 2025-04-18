import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMapBoundaryIcon],svg[carbon-map-boundary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h2v4h-2zm6 8h4v2h-4zm-4 0v-2h-2v4h4v-2zm2-14h12v12H16z"></svg:path><svg:path fill="currentColor" d="m17.885 29.997l-6.066-3.855L4 27.989V4h10v4h-2V6H6v19.461l6.181-1.46l5.934 3.772L22.818 26H26v-6h-2v-2h4v10h-4.818z"></svg:path>`,
})
export class CarbonMapBoundaryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
