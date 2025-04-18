import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeSleepNapSleepRestBreakClockIcon],svg[streamline-interface-time-sleep-nap-sleep-rest-break-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 7A6.5 6.5 0 1 1 7 .5"></svg:path><svg:path d="M7 4.5V7L4.46 9.96M10 .5h3.5l-3.5 4h3.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTimeSleepNapSleepRestBreakClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
