import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageAlarmClockIcon],svg[mage-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M14.319 15.203L12 12.883V8.247M20.116 21l-2.319-2.319m-11.594 0L3.883 21M18.377 3l2.319 2.319M5.623 3L3.304 5.319"></svg:path><svg:path d="M12 21a8.116 8.116 0 1 0 0-16.233A8.116 8.116 0 0 0 12 21Z"></svg:path></svg:g>`,
})
export class MageAlarmClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
