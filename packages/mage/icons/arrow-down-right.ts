import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownRightIcon],svg[mage-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M17.657 17.657L6.343 6.343"></svg:path><svg:path stroke-linejoin="round" d="M7.267 18.101h9.296a1.53 1.53 0 0 0 1.538-1.538V7.267"></svg:path></svg:g>`,
})
export class MageArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
