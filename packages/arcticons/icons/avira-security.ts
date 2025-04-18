import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAviraSecurityIcon],svg[arcticons-avira-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.701 13.096c-7.595-7.595-19.91-7.595-27.505 0s-7.595 19.91 0 27.505z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.949 26.848l11.066 11.066a3.8 3.8 0 0 0 5.372 0h0a3.8 3.8 0 0 0 0-5.372l-1.44-1.44"></svg:path>`,
})
export class ArcticonsAviraSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
