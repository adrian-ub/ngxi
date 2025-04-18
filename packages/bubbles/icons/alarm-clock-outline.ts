import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAlarmClockOutlineIcon],svg[bubbles-alarm-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12.75a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12.75m3 10.5l1.386-2.771M12 12.75H8.609M12 7.5v5.25m-10.5-9l3.75-3M18 23.25l-1.386-2.771M22.5 3.75l-3.75-3"></svg:path>`,
})
export class BubblesAlarmClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
