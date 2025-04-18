import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDiamondNecklaceIcon],svg[icon-park-outline-diamond-necklace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 32.41L24 29l7 3.41v7.5L24 44l-7-4.09zM8 4c.455 8.333 6 25 16 25S40 12.784 40 4"></svg:path>`,
})
export class IconParkOutlineDiamondNecklaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
