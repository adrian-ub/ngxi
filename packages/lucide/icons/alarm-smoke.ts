import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlarmSmokeIcon],svg[lucide-alarm-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 21c0-2.5 2-2.5 2-5m3 5c0-2.5 2-2.5 2-5m1-8l-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8m16-5a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1zM6 21c0-2.5 2-2.5 2-5"></svg:path>`,
})
export class LucideAlarmSmokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
