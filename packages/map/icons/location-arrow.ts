import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapLocationArrowIcon],svg[map-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.517 48.107L25.445 27H2.462L46.66 2.196z"></svg:path>`,
})
export class MapLocationArrowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
