import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapZoomInIcon],svg[map-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 20H30V2H20v18H2v10h18v18h10V30h18z"></svg:path>`,
})
export class MapZoomInIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
