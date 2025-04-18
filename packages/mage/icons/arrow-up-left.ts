import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpLeftIcon],svg[mage-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m6.343 6.343l11.314 11.314"></svg:path><svg:path stroke-linejoin="round" d="M16.733 5.899H7.437A1.53 1.53 0 0 0 5.9 7.437v9.296"></svg:path></svg:g>`,
})
export class MageArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
