import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1FirstQuarterMoonIcon],svg[noto-v1-first-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1FirstQuarterMoon0" d="M127.76 64c0 35.22-28.54 63.77-63.77 63.77C28.79 127.76.24 99.22.24 64C.24 28.79 28.79.24 64 .24c35.22 0 63.76 28.55 63.76 63.76"></svg:path></svg:defs><svg:use fill="#2f2f2f" href="#notoV1FirstQuarterMoon0"></svg:use><svg:clippath id="notoV1FirstQuarterMoon1"><svg:use href="#notoV1FirstQuarterMoon0"></svg:use></svg:clippath><svg:path fill="#fcc21b" d="M64-17.32h88.89v158.99H64z" clip-path="url(#notoV1FirstQuarterMoon1)"></svg:path>`,
})
export class NotoV1FirstQuarterMoonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
