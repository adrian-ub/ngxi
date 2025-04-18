import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag4LineIcon],svg[ri-shopping-bag-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6h6a3 3 0 1 0-6 0M7 6a5 5 0 0 1 10 0h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM5 8v12h14V8zm4 2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z"></svg:path>`,
})
export class RiShoppingBag4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
