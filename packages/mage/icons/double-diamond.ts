import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleDiamondIcon],svg[mage-double-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-width="1.5" clip-path="url(#mageDoubleDiamond0)"><svg:path d="M8.754 3.225L3.225 8.754a4.59 4.59 0 0 0 0 6.492l5.529 5.529a4.59 4.59 0 0 0 6.492 0l5.529-5.529a4.59 4.59 0 0 0 0-6.492l-5.529-5.529a4.59 4.59 0 0 0-6.492 0Z"></svg:path><svg:path d="M10.576 8.15L8.15 10.577a2.014 2.014 0 0 0 0 2.848l2.425 2.425a2.014 2.014 0 0 0 2.848 0l2.425-2.425a2.014 2.014 0 0 0 0-2.848L13.424 8.15a2.014 2.014 0 0 0-2.848 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="mageDoubleDiamond0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageDoubleDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
