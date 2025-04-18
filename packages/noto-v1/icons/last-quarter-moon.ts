import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1LastQuarterMoonIcon],svg[noto-v1-last-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1LastQuarterMoon0" d="M.24 64c0 35.21 28.54 63.77 63.76 63.77c35.21 0 63.77-28.55 63.77-63.77S99.22.23 64 .23S.24 28.78.24 64"></svg:path></svg:defs><svg:use fill="#2f2f2f" href="#notoV1LastQuarterMoon0"></svg:use><svg:clippath id="notoV1LastQuarterMoon1"><svg:use href="#notoV1LastQuarterMoon0"></svg:use></svg:clippath><svg:path fill="#fcc21b" d="M-24.89-17.32H64v158.99h-88.89z" clip-path="url(#notoV1LastQuarterMoon1)"></svg:path>`,
})
export class NotoV1LastQuarterMoonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
