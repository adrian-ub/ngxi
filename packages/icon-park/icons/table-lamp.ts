import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTableLampIcon],svg[icon-park-table-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 44L42 28L22 12"></svg:path><svg:path fill="#2F88FF" d="M6 12L16 22L24 8L20 4L6 12Z"></svg:path><svg:path d="M38 44H12"></svg:path><svg:path d="M17 44V40"></svg:path></svg:g>`,
})
export class IconParkTableLampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
