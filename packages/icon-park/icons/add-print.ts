import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddPrintIcon],svg[icon-park-add-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M12 19H6V6H42V19H36"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M12 12H36V44L30 39.5556L24 44L18 39.5556L12 44V12Z"></svg:path><svg:path stroke="#fff" d="M20 26H28"></svg:path><svg:path stroke="#fff" d="M24 22L24 30"></svg:path></svg:g>`,
})
export class IconParkAddPrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
