import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShopFilledIcon],svg[tdesign-shop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a4.5 4.5 0 0 0-4.5 4.5V7H3v16h18V7h-4.5V5.5A4.5 4.5 0 0 0 12 1m2.5 4.5V7h-5V5.5a2.5 2.5 0 0 1 5 0m-7 6.5V9h2v3zm7 0V9h2v3z"></svg:path>`,
})
export class TdesignShopFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
