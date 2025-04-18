import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceParkingIcon],svg[guidance-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 19v-6.5m0 0v-7h4.5a3.5 3.5 0 1 1 0 7zm3 11C5.649 23.5.5 18.351.5 12S5.649.5 12 .5S23.5 5.649 23.5 12S18.351 23.5 12 23.5Z"></svg:path>`,
})
export class GuidanceParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
