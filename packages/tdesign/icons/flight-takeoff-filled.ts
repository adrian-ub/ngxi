import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlightTakeoffFilledIcon],svg[tdesign-flight-takeoff-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.325 2.388l6.707 6.485l4.959-1.33a2.5 2.5 0 0 1 1.294 4.83L3.589 17.116l-3.164-6.4l3.174-.85l1.677 1.622l3.335-.894l-4.002-7.21zM2 19h20v2H2z"></svg:path>`,
})
export class TdesignFlightTakeoffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
