import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaShoppingBagOutlineIcon],svg[eva-shopping-bag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12m-12-1.42A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7H6.41ZM18 19H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M15 11a1 1 0 0 0-1 1a2 2 0 0 1-4 0a1 1 0 0 0-2 0a4 4 0 0 0 8 0a1 1 0 0 0-1-1"></svg:path>`,
})
export class EvaShoppingBagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
