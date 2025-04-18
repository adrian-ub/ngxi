import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeKeystaticIcon],svg[material-icon-theme-keystatic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeKeystatic0" x1="385.222" x2="405.918" y1="482.514" y2="477.914" gradientTransform="matrix(.75 0 0 .75 -284.775 -343.25)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#78909c" stop-opacity=".2"></svg:stop><svg:stop offset="1" stop-color="#78909c"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#78909c" d="m17.714 9l-3.428 14l-1.715 7L28 14ZM4 18L19.429 2l-1.715 7Z"></svg:path><svg:path fill="url(#materialIconThemeKeystatic0)" d="M17.714 9L4 18l10.286 5Z"></svg:path>`,
})
export class MaterialIconThemeKeystaticIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
