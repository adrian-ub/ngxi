import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlarmClockIcon],svg[proicons-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-width="1.5" d="m21.25 7.072l-3.574-3.574M2.75 7.072l3.574-3.574"></svg:path><svg:circle cx="12" cy="12.753" r="7.75" stroke-width="1.503"></svg:circle><svg:path stroke-linecap="round" stroke-width="1.503" d="m17.514 18.267l2.236 2.235M6.486 18.267L4.25 20.502"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.9 8.353v4.25l3.685 2.117"></svg:path></svg:g>`,
})
export class ProiconsAlarmClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
