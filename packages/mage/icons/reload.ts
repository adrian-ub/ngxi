import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageReloadIcon],svg[mage-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M18.024 7.043A8.374 8.374 0 0 0 3.74 12.955"></svg:path><svg:path stroke-linejoin="round" d="m17.35 2.75l.832 3.372a1.123 1.123 0 0 1-.854 1.382l-3.372.843"></svg:path><svg:path stroke-miterlimit="10" d="M5.976 16.957a8.374 8.374 0 0 0 14.285-5.912"></svg:path><svg:path stroke-linejoin="round" d="m6.65 21.25l-.832-3.372a1.124 1.124 0 0 1 .855-1.382l3.371-.843"></svg:path></svg:g>`,
})
export class MageReloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
