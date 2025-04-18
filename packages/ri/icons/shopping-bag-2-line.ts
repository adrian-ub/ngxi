import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag2LineIcon],svg[ri-shopping-bag-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 22h-16a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4h-14v16zm-10-14v2a3 3 0 1 0 6 0V6h2v2a5 5 0 0 1-10 0V6z"></svg:path>`,
})
export class RiShoppingBag2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
