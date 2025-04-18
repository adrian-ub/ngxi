import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiAlarmSnoozeIcon],svg[mynaui-alarm-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 5.231L6.15 3M21 5.231L17.85 3M20 13a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path><svg:path d="M10.75 11h2.5l-2.5 4h2.5"></svg:path></svg:g>`,
})
export class MynauiAlarmSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
