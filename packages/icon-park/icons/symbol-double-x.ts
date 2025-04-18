import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSymbolDoubleXIcon],svg[icon-park-symbol-double-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 4L24 18L38 4"></svg:path><svg:path d="M10 44L24 30L38 44"></svg:path><svg:path d="M43 10L29 24L43 38"></svg:path><svg:path d="M4 10L18 24L4 38"></svg:path></svg:g>`,
})
export class IconParkSymbolDoubleXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
