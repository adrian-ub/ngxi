import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDetailsIcon],svg[ic-round-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.13 4.57l-8.3 14.94c-.37.67.11 1.49.87 1.49h16.6c.76 0 1.24-.82.87-1.49l-8.3-14.94a.997.997 0 0 0-1.74 0M13 8.92L18.6 19H13zm-2 0V19H5.4z"></svg:path>`,
})
export class IcRoundDetailsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
