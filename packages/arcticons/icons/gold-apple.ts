import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoldAppleIcon],svg[arcticons-gold-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.862 32.319l6.512-3.366c5.545-2.866 7.601-7.4 7.651-11.417c.053-4.21-3.159-6.35-6.57-4.586l-7.593 3.924"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.862 43.5l6.512-3.365c5.545-2.866 7.601-7.4 7.651-11.418c.053-4.21-3.159-6.35-6.57-4.586l-7.593 3.924"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.138 15.681l-6.512 3.366c-5.545 2.866-7.601 7.4-7.651 11.417c-.053 4.21 3.159 6.35 6.57 4.586l7.593-3.924"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.138 4.5l-6.512 3.365c-5.545 2.866-7.601 7.4-7.651 11.418c-.053 4.21 3.159 6.35 6.57 4.586l7.593-3.924"></svg:path>`,
})
export class ArcticonsGoldAppleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
