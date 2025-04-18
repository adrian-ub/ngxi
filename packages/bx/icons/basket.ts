import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBasketIcon],svg[bx-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9h-1.42l-3.712-6.496l-1.736.992L17.277 9H6.723l3.146-5.504l-1.737-.992L4.42 9H3a1 1 0 0 0-.965 1.263l2.799 10.264A2.005 2.005 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9m-3.764 11v1zH6.764L4.31 11h15.38z"></svg:path><svg:path fill="currentColor" d="M9 13h2v5H9zm4 0h2v5h-2z"></svg:path>`,
})
export class BxBasketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
