import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamShoppingBagIcon],svg[jam-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a1 1 0 0 0-1-1zm2-2V5a5 5 0 1 1 10 0v3h2a3 3 0 0 1 3 3v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6v-3a3 3 0 0 1 3-3zm2 0h6V5a3 3 0 0 0-6 0z"></svg:path>`,
})
export class JamShoppingBagIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
