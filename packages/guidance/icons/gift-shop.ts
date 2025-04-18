import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceGiftShopIcon],svg[guidance-gift-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 6.5v15m0-15V4m0 2.5H9.5A2.5 2.5 0 1 1 12 4m0 2.5h2.5A2.5 2.5 0 1 0 12 4M3.25 14h17.5m-17.5 0c0-2.328-.23-4.65-.686-6.932L2.5 6.75V6.5h19v.25l-.064.318A35.4 35.4 0 0 0 20.75 14m-17.5 0c0 2.328-.23 4.65-.686 6.932l-.064.318v.25h19v-.25l-.064-.318A35.4 35.4 0 0 1 20.75 14"></svg:path>`,
})
export class GuidanceGiftShopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
