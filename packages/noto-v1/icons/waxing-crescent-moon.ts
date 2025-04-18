import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1WaxingCrescentMoonIcon],svg[noto-v1-waxing-crescent-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1WaxingCrescentMoon0" d="M.24 64.01c0 35.21 28.54 63.76 63.76 63.76c35.21 0 63.77-28.55 63.77-63.76C127.77 28.79 99.22.23 64 .23S.24 28.78.24 64.01"></svg:path></svg:defs><svg:use fill="#fcc21b" href="#notoV1WaxingCrescentMoon0"></svg:use><svg:clippath id="notoV1WaxingCrescentMoon1"><svg:use href="#notoV1WaxingCrescentMoon0"></svg:use></svg:clippath><svg:path fill="#2f2f2f" d="M-14.84 64.01c0 35.21 25.82 63.76 57.69 63.76c31.85 0 57.68-28.55 57.68-63.76C100.53 28.79 74.7.23 42.85.23c-31.87 0-57.69 28.55-57.69 63.78" clip-path="url(#notoV1WaxingCrescentMoon1)"></svg:path>`,
})
export class NotoV1WaxingCrescentMoonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
