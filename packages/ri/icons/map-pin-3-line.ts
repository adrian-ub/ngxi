import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMapPin3LineIcon],svg[ri-map-pin-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2zM12 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path>`,
})
export class RiMapPin3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
