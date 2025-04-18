import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapZoomOutIcon],svg[map-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h46v10H2z"></svg:path>`,
})
export class MapZoomOutIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
