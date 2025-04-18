import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeMidnightWholeMidnightHourClockTimeIcon],svg[streamline-interface-time-midnight-whole-midnight-hour-clock-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 7H.5m2.96-3.54L2.4 2.4m1.06 8.14L2.4 11.6M12 7h1.5m-2.96 3.54l1.06 1.06M7 12v1.5m3.54-10.04L11.6 2.4M7 2V.5"></svg:path>`,
})
export class StreamlineInterfaceTimeMidnightWholeMidnightHourClockTimeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
