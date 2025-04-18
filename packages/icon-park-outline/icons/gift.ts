import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGiftIcon],svg[icon-park-outline-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M41 44V20H7v24zm-17 0V20m17 24H7"></svg:path><svg:path d="M4 12h40v8H4z"></svg:path><svg:path stroke-linecap="round" d="m16 4l8 8l8-8"></svg:path></svg:g>`,
})
export class IconParkOutlineGiftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
