import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherShoppingBagIcon],svg[feather-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18"></svg:path><svg:path d="M16 10a4 4 0 0 1-8 0"></svg:path></svg:g>`,
})
export class FeatherShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
