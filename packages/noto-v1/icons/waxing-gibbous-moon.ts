import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1WaxingGibbousMoonIcon],svg[noto-v1-waxing-gibbous-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="notoV1WaxingGibbousMoon0" d="M127.76 64c0 35.22-28.54 63.76-63.77 63.76C28.79 127.76.24 99.22.24 64S28.79.24 64 .24c35.22 0 63.76 28.54 63.76 63.76"></svg:path></svg:defs><svg:use fill="#2f2f2f" href="#notoV1WaxingGibbousMoon0"></svg:use><svg:clippath id="notoV1WaxingGibbousMoon1"><svg:use href="#notoV1WaxingGibbousMoon0"></svg:use></svg:clippath><svg:path fill="#fcc21b" d="M142.84 64c0 35.22-25.83 63.76-57.68 63.76c-31.86 0-57.69-28.54-57.69-63.76S53.29.23 85.16.23c31.85.01 57.68 28.55 57.68 63.77" clip-path="url(#notoV1WaxingGibbousMoon1)"></svg:path>`,
})
export class NotoV1WaxingGibbousMoonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
