import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAlarmClockIcon],svg[streamline-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M.5 2.5A8.7 8.7 0 0 1 3 .5m10.5 2a8.7 8.7 0 0 0-2.5-2"></svg:path><svg:path d="M7 5v3h2.5"></svg:path></svg:g>`,
})
export class StreamlineAlarmClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
