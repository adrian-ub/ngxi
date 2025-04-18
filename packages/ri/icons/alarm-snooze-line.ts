import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAlarmSnoozeLineIcon],svg[ri-alarm-snooze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 1 0 18 0a9 9 0 0 0-18 0m16 0a7 7 0 1 1-14 0a7 7 0 0 1 14 0M5.283 2.747L1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536l-3.535-3.536l-1.415 1.414l3.536 3.536zM9 11h3.586L9 14.586V17h6v-2h-3.586L15 11.414V9H9z"></svg:path>`,
})
export class RiAlarmSnoozeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
