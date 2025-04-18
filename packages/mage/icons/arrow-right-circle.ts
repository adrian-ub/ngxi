import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightCircleIcon],svg[mage-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M17.542 12H6.458"></svg:path><svg:path stroke-linejoin="round" d="m12.697 17.278l4.58-4.528a1.06 1.06 0 0 0 0-1.5l-4.58-4.528"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
