import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScanCodeIcon],svg[icon-park-scan-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 15V6H15"></svg:path><svg:path d="M15 42H6V33"></svg:path><svg:path d="M42 33V42H33"></svg:path><svg:path d="M33 6H42V15"></svg:path><svg:path d="M10 24H38"></svg:path></svg:g>`,
})
export class IconParkScanCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
