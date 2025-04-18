import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGiftIcon],svg[icon-park-twotone-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGift0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" stroke-linecap="round" d="M41 44V20H7v24z"></svg:path><svg:path stroke-linecap="round" d="M24 44V20m17 24H7"></svg:path><svg:path fill="#555" d="M4 12h40v8H4z"></svg:path><svg:path stroke-linecap="round" d="m16 4l8 8l8-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGift0)"></svg:path>`,
})
export class IconParkTwotoneGiftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
