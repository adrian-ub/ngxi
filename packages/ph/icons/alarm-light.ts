import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAlarmLightIcon],svg[ph-alarm-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 42a94 94 0 1 0 94 94a94.11 94.11 0 0 0-94-94m0 176a82 82 0 1 1 82-82a82.1 82.1 0 0 1-82 82M60.24 36.24l-32 32a6 6 0 1 1-8.48-8.48l32-32a6 6 0 1 1 8.48 8.48m176 32a6 6 0 0 1-8.48 0l-32-32a6 6 0 0 1 8.48-8.48l32 32a6 6 0 0 1 0 8.48M184 130a6 6 0 0 1 0 12h-56a6 6 0 0 1-6-6V80a6 6 0 0 1 12 0v50Z"></svg:path>`,
})
export class PhAlarmLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
