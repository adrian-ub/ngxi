import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBombIcon],svg[arcticons-emoji-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.619 11.561l3.829-3.829l7.758 7.758l-3.786 3.786m.034-7.792L42.44 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.561 26.277c0 8.96 7.262 16.223 16.221 16.223c8.96 0 16.223-7.262 16.223-16.22v-.003c0-8.96-7.262-16.222-16.222-16.222S5.561 17.318 5.561 26.277"></svg:path>`,
})
export class ArcticonsEmojiBombIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
