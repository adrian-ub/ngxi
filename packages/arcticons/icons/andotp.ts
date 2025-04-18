import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAndotpIcon],svg[arcticons-andotp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 8.48a16.12 16.12 0 0 1 15.83 13.13H8.17A16.11 16.11 0 0 1 24 8.48m0 18.18a2.59 2.59 0 0 1 1.43 4.75l1.43 3.88h-5.72l1.43-3.88A2.59 2.59 0 0 1 24 26.66"></svg:path>`,
})
export class ArcticonsAndotpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
