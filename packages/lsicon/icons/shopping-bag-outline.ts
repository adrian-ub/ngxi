import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingBagOutlineIcon],svg[lsicon-shopping-bag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10.5 7V4a2.5 2.5 0 0 0-5 0v3m7-2.5v9h-9v-9z"></svg:path>`,
})
export class LsiconShoppingBagOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
