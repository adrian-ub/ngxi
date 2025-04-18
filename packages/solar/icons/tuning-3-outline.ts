import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning3OutlineIcon],svg[solar-tuning-3-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 7.25a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5M5.25 10a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m9.5 2a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0M12 13.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m10.75.75a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0M20 15.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.25 10a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0zM4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75M11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm8.75.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75M3.25 5a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarTuning3OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
