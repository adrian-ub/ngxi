import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFortitokenMobileIcon],svg[arcticons-fortitoken-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="36.283" height="19.096" x="5.859" y="14.452" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.78" ry="2.78" transform="rotate(-28.888 24 24)"></svg:rect><svg:rect width="13.536" height="27.943" x="16.015" y="10.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".927" ry=".927" transform="rotate(61.112 22.783 24.671)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.864 19.438l-3.079-5.58"></svg:path>`,
})
export class ArcticonsFortitokenMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
