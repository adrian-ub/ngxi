import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowlistIcon],svg[mage-arrowlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.104 5.552H21M8.104 12H21M8.104 18.448H21m-18-8.06L4.612 12L3 13.612M3 3.94l1.612 1.612L3 7.164m0 9.672l1.612 1.612L3 20.06"></svg:path>`,
})
export class MageArrowlistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
