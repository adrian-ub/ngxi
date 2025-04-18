import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsIceCreamIcon],svg[grommet-icons-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M17 8c2 0 2-1.5.5-1.5c0-3-2-5.5-5.5-5.5S6.5 3.5 6.5 6.5C5 6.5 5 8 7 8m0 0h10l-5 13z"></svg:path>`,
})
export class GrommetIconsIceCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
