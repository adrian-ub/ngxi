import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1FullMoonIcon],svg[noto-v1-full-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1FullMoon0" d="M.23 64c0 35.21 28.54 63.76 63.77 63.76c35.21 0 63.77-28.55 63.77-63.76C127.77 28.78 99.22.23 64 .23S.23 28.78.23 64"></svg:path></svg:defs><svg:use fill="#fcc21b" href="#notoV1FullMoon0"></svg:use>`,
})
export class NotoV1FullMoonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
