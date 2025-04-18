import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGiftIcon],svg[icon-park-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" d="M41 44V20H7V44H41Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 44V20"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M41 44H7"></svg:path><svg:rect width="40" height="8" x="4" y="12" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M16 4L24 12L32 4"></svg:path></svg:g>`,
})
export class IconParkGiftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
