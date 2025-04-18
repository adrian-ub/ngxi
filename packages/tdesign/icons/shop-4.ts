import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShop4Icon],svg[tdesign-shop-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a2 2 0 0 0-2 2v1h3V4zm3 0v3h4V4zm6 0v3h3V6a2 2 0 0 0-2-2zm5 3h1v2h-1v11h1v2H2v-2h1V9H2V7h1V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4zm-2 2H5v11h3v-5a4 4 0 0 1 8 0v5h3zm-5 11v-5a2 2 0 1 0-4 0v5z"></svg:path>`,
})
export class TdesignShop4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
