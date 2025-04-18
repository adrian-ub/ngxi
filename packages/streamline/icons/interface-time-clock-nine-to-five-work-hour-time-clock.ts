import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeClockNineToFiveWorkHourTimeClockIcon],svg[streamline-interface-time-clock-nine-to-five-work-hour-time-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 12v1.5m-3.54-2.96L2.4 11.6M7 .5A6.5 6.5 0 0 0 .5 7H7l4.6 4.6A6.51 6.51 0 0 0 7 .5Z"></svg:path>`,
})
export class StreamlineInterfaceTimeClockNineToFiveWorkHourTimeClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
