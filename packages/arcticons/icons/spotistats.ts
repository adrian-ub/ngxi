import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpotistatsIcon],svg[arcticons-spotistats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="7.68" height="34.586" x="20.16" y="6.707" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.327"></svg:rect><svg:rect width="7.68" height="15.244" x="33.821" y="26.049" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.327"></svg:rect><svg:rect width="7.68" height="24.721" x="6.5" y="16.572" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.327"></svg:rect>`,
})
export class ArcticonsSpotistatsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
