import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightSquareIcon],svg[mage-arrow-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M17.396 12H6.604"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12.678 17.139l4.46-4.41a1.03 1.03 0 0 0 .226-1.124a1 1 0 0 0-.225-.335l-4.46-4.409"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
