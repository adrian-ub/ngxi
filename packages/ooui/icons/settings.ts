import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSettingsIcon],svg[ooui-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="translate(10 10)"><svg:path id="oouiSettings0" fill="currentColor" d="M1.5-10h-3l-1 6.5h5m0 7h-5l1 6.5h3"></svg:path><svg:use href="#oouiSettings0" transform="rotate(45)"></svg:use><svg:use href="#oouiSettings0" transform="rotate(90)"></svg:use><svg:use href="#oouiSettings0" transform="rotate(135)"></svg:use></svg:g><svg:path fill="currentColor" d="M10 2.5a7.5 7.5 0 0 0 0 15a7.5 7.5 0 0 0 0-15v4a3.5 3.5 0 0 1 0 7a3.5 3.5 0 0 1 0-7"></svg:path>`,
})
export class OouiSettingsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
