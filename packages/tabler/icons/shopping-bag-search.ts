import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShoppingBagSearchIcon],svg[tabler-shopping-bag-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.117.761"></svg:path><svg:path d="M9 11V6a3 3 0 0 1 6 0v5m0 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22"></svg:path></svg:g>`,
})
export class TablerShoppingBagSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
