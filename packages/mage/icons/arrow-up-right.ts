import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpRightIcon],svg[mage-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M17.657 6.343L6.343 17.657"></svg:path><svg:path stroke-linejoin="round" d="M18.101 16.733V7.437A1.53 1.53 0 0 0 16.563 5.9H7.267"></svg:path></svg:g>`,
})
export class MageArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
