import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpShoppingBagIcon],svg[ic-sharp-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-4c0-2.21-1.79-4-4-4S8 3.79 8 6H4v16h16zm-10 5H8V8h2zm2-7c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 7h-2V8h2z"></svg:path>`,
})
export class IcSharpShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
