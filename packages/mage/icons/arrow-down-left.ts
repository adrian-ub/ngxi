import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftIcon],svg[mage-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M6.343 17.657L17.657 6.343"></svg:path><svg:path stroke-linejoin="round" d="M5.899 7.267v9.296A1.53 1.53 0 0 0 7.437 18.1h9.296"></svg:path></svg:g>`,
})
export class MageArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
