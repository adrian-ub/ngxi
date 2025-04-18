import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsShoppingBagIcon],svg[akar-icons-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.977 9.84A2 2 0 0 1 5.971 8h12.058a2 2 0 0 1 1.994 1.84l.803 10A2 2 0 0 1 18.833 22H5.167a2 2 0 0 1-1.993-2.16z"></svg:path><svg:path d="M16 11V6a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v5"></svg:path></svg:g>`,
})
export class AkarIconsShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
