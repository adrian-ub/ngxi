import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1WaningGibbousMoonIcon],svg[noto-v1-waning-gibbous-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1WaningGibbousMoon0" d="M.23 64c0 35.22 28.54 63.77 63.77 63.77c35.21 0 63.77-28.54 63.77-63.77C127.77 28.79 99.22.23 64 .23S.23 28.79.23 64"></svg:path></svg:defs><svg:use fill="#2f2f2f" href="#notoV1WaningGibbousMoon0"></svg:use><svg:clippath id="notoV1WaningGibbousMoon1"><svg:use href="#notoV1WaningGibbousMoon0"></svg:use></svg:clippath><svg:path fill="#fcc21b" d="M-14.84 64c0 35.22 25.82 63.77 57.69 63.77c31.85 0 57.68-28.54 57.68-63.77C100.53 28.79 74.7.23 42.85.23C10.98.23-14.84 28.79-14.84 64" clip-path="url(#notoV1WaningGibbousMoon1)"></svg:path>`,
})
export class NotoV1WaningGibbousMoonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
