import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamShoppingBagAltIcon],svg[jam-shopping-bag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8zm0-2V3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3h2v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6zm2 0h6V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"></svg:path>`,
})
export class JamShoppingBagAltIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
