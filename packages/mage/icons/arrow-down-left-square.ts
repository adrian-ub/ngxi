import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftSquareIcon],svg[mage-arrow-down-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="m8.187 15.813l7.626-7.626"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.889 8.845v6.238a1.03 1.03 0 0 0 1.027 1.028h6.24"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowDownLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
