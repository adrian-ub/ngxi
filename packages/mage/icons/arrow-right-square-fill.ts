import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightSquareFillIcon],svg[mage-arrow-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m3 10.78a2.2 2.2 0 0 1-.45.66l-4.46 4.41a1 1 0 0 1-.7.29a1 1 0 0 1-.71-.3a1 1 0 0 1 0-1.41L15.5 13H6.6a1 1 0 0 1 0-2h8.82l-3.44-3.43a1 1 0 1 1 1.4-1.42l4.46 4.41c.19.19.343.414.45.66c.2.5.2 1.06 0 1.56z"></svg:path>`,
})
export class MageArrowRightSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
