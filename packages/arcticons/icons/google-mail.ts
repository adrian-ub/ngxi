import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleMailIcon],svg[arcticons-google-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.39 12.145v26.39H7.06a2.56 2.56 0 0 1-2.56-2.54v-19.18m30.11-4.67v26.39h6.33a2.56 2.56 0 0 0 2.56-2.54v-19.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 31.445l19.5-14.45v-3.6a3.94 3.94 0 0 0-6.28-3.16L24 20.055l-13.22-9.82a3.94 3.94 0 0 0-6.28 3.16v3.6z"></svg:path>`,
})
export class ArcticonsGoogleMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
