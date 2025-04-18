import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaintRollerDuotoneIcon],svg[ph-paint-roller-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 64v64a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h152a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 88h-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v24H16a8 8 0 0 0 0 16h16v24a16 16 0 0 0 16 16h152a16 16 0 0 0 16-16v-24h16v50l-100.4 28.65A16.07 16.07 0 0 0 120 198v34a8 8 0 0 0 16 0v-34l100.4-28.68A16.07 16.07 0 0 0 248 154v-50a16 16 0 0 0-16-16m-32 40H48V64h152z"></svg:path></svg:g>`,
})
export class PhPaintRollerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
