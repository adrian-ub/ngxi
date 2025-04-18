import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmclockIcon],svg[lets-icons-alarmclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="13" r="7"></svg:circle><svg:path stroke-linecap="round" d="M5 5L3 7m16-2l2 2M9 11l2.81 1.873a.25.25 0 0 0 .333-.052L14 10.5"></svg:path></svg:g>`,
})
export class LetsIconsAlarmclockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
