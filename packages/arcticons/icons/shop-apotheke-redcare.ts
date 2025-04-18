import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShopApothekeRedcareIcon],svg[arcticons-shop-apotheke-redcare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.419" cy="36.588" r="5.912" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.317 11.982l-6.205 23.156c-1.365 5.086-8.582 5.086-9.948 0l-2.44-9.101a2.5 2.5 0 0 0-1.767-1.768l-9.102-2.44c-5.087-1.366-5.087-8.583 0-9.949L36.01 5.675a5.15 5.15 0 0 1 6.306 6.306z"></svg:path>`,
})
export class ArcticonsShopApothekeRedcareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
