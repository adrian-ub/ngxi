import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGiftIcon],svg[icon-park-solid-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSGift0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" d="M41 44V20H7v24z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 44V20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M41 44H7"></svg:path><svg:path fill="#fff" stroke="#fff" d="M4 12h40v8H4z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m16 4l8 8l8-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSGift0)"></svg:path>`,
})
export class IconParkSolidGiftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
