import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBasketIcon],svg[picon-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7L0 3h1l2-3h1L2 3h4L4 0h1l2 3h1L7 7"></svg:path>`,
})
export class PiconBasketIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
