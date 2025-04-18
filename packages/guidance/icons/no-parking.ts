import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceNoParkingIcon],svg[guidance-no-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 12.5h1a3.5 3.5 0 1 0 0-7H9V9m0 10v-7M3.868 3.868l16.264 16.264M12 23.5C5.649 23.5.5 18.351.5 12S5.649.5 12 .5S23.5 5.649 23.5 12S18.351 23.5 12 23.5Z"></svg:path>`,
})
export class GuidanceNoParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
