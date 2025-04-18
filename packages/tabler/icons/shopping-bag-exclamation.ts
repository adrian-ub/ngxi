import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShoppingBagExclamationIcon],svg[tabler-shopping-bag-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.258 1.678"></svg:path><svg:path d="M9 11V6a3 3 0 0 1 6 0v5m4 5v3m0 3v.01"></svg:path></svg:g>`,
})
export class TablerShoppingBagExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
