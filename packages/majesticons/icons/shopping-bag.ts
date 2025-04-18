import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsShoppingBagIcon],svg[majesticons-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M6 7a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H6zm6-3a3 3 0 0 0-3 3v4a1 1 0 1 1-2 0V7a5 5 0 0 1 10 0v4a1 1 0 1 1-2 0V7a3 3 0 0 0-3-3z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
