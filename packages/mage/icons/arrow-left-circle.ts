import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowLeftCircleIcon],svg[mage-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M6.458 12h11.084"></svg:path><svg:path stroke-linejoin="round" d="m11.303 6.722l-4.528 4.529a1.056 1.056 0 0 0 0 1.499l4.528 4.528"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
