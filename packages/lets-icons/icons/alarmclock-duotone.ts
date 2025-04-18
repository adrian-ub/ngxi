import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsAlarmclockDuotoneIcon],svg[lets-icons-alarmclock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="13" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="m5.5 4.5l-2 2m15-2l2 2M12 8v4.924q0 .076.042.139L14 16"></svg:path></svg:g>`,
})
export class LetsIconsAlarmclockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
