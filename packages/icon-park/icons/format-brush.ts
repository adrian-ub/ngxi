import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFormatBrushIcon],svg[icon-park-format-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M34 5H6V20H34V5Z"></svg:path><svg:path stroke-linecap="round" d="M34.0251 12H43V28.1014L19 31.2004V43"></svg:path></svg:g>`,
})
export class IconParkFormatBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
