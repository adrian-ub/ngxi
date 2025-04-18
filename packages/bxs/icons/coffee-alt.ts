import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCoffeeAltIcon],svg[bxs-coffee-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a4 4 0 0 0 4 4h6c1.858 0 3.411-1.279 3.858-3H19a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m1 6a1 1 0 0 1-1 1h-1V7h1a1 1 0 0 1 1 1zm-2 8H3c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3z"></svg:path>`,
})
export class BxsCoffeeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
