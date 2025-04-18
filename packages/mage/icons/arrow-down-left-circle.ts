import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftCircleIcon],svg[mage-arrow-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m8.232 15.768l7.832-7.842"></svg:path><svg:path stroke-linejoin="round" d="M7.926 8.612v6.396a1.055 1.055 0 0 0 1.055 1.056h6.397"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowDownLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
