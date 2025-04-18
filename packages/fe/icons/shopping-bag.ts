import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feShoppingBagIcon],svg[fe-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm-3 2v9h14v-9h-3.002v3H14v-3h-4v3H8v-3zm5-2h4V5h-4z"></svg:path>`,
})
export class FeShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
