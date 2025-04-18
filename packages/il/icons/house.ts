import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilHouseIcon],svg[il-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M733 289q8 6 8 18v406q0 10-6 16t-17 7H487q-10 0-17-7t-7-16V458q0-10-6-17t-17-6H301q-10 0-16 6t-7 17v255q0 10-6 16t-17 7H23q-10 0-16-7t-7-16V307q0-12 9-18L356 7q15-12 29 0z"></svg:path>`,
})
export class IlHouseIcon {
  readonly viewBox = input("0 0 750 840")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
