import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laShoppingBagIcon],svg[la-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-2.746 0-5 2.254-5 5v1H6.062L6 9.938l-1 18L4.937 29h22.125L27 27.937l-1-18L25.937 9H21V8c0-2.746-2.254-5-5-5m0 2a3 3 0 0 1 3 3v1h-6V8a3 3 0 0 1 3-3m-8.063 6H11v3h2v-3h6v3h2v-3h3.063l.875 16H7.063z"></svg:path>`,
})
export class LaShoppingBagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
