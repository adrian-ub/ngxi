import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning3BoldIcon],svg[solar-tuning-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75M4 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m6 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m8 2a2 2 0 1 1 4 0a2 2 0 0 1-4 0m1.25-4a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm8.75.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarTuning3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
