import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSigninIcon],svg[uil-signin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a1 1 0 0 0-1-1h-7.59l2.3-2.29a1 1 0 1 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L11.41 13H19a1 1 0 0 0 1-1M17 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 0 2 0V5a3 3 0 0 0-3-3"></svg:path>`,
})
export class UilSigninIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
