import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShoppingBag4FillIcon],svg[ri-shopping-bag-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a3 3 0 1 1 6 0zM7 6H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3A5 5 0 0 0 7 6m2 4a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0z"></svg:path>`,
})
export class RiShoppingBag4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
