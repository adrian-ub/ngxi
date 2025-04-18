import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapMapPinIcon],svg[map-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.015 2.4c-7.8 0-14.121 6.204-14.121 13.854C10.894 23.906 25.015 49 25.015 49s14.122-25.094 14.122-32.746c0-7.65-6.325-13.854-14.122-13.854"></svg:path>`,
})
export class MapMapPinIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
