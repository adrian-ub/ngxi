import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignShop1Icon],svg[tdesign-shop-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 7.465V20h4v-7h8v7h4V9.465A4 4 0 0 1 18 10a4 4 0 0 1-3-1.354A4 4 0 0 1 12 10a4 4 0 0 1-3-1.354A4 4 0 0 1 6 10a4 4 0 0 1-2-.535M10 6a2 2 0 1 0 4 0V4h-4zM8 4H4v2a2 2 0 1 0 4 0zm8 0v2a2 2 0 1 0 4 0V4zm-2 16v-5h-4v5z"></svg:path>`,
})
export class TdesignShop1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
