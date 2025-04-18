import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnifiProtectIcon],svg[arcticons-unifi-protect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13.123" height="14.966" x="17.439" y="7.067" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.561"></svg:rect><svg:rect width="17.624" height="20.1" x="15.188" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="8.812"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.747 15.788v24.797a2.406 2.406 0 0 1-2.023 2.375h0a42.5 42.5 0 0 1-13.512 0h0a2.406 2.406 0 0 1-2.024-2.375V15.788"></svg:path>`,
})
export class ArcticonsUnifiProtectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
