import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMapRouteIcon],svg[tabler-map-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3zm6 5v.01M6 13v.01M17 15l-4-4m0 4l4-4"></svg:path>`,
})
export class TablerMapRouteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
