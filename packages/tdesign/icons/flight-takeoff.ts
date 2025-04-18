import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlightTakeoffIcon],svg[tdesign-flight-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.324 2.387l6.707 6.486l4.96-1.33a2.5 2.5 0 0 1 1.293 4.83L3.59 17.115l-3.164-6.4l3.174-.85l1.677 1.622l3.335-.894l-4.002-7.21zM7.6 4.652l4.003 7.21l-6.904 1.85l-1.077-1.042l1.033 2.089l16.112-4.317a.5.5 0 0 0-.26-.966l-6.052 1.621l-6.707-6.485zM2 19h20v2H2z"></svg:path>`,
})
export class TdesignFlightTakeoffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
