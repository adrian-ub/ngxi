import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuningBoldIcon],svg[solar-tuning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.959 9.75a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-.75.75M7 12.5a3 3 0 1 1 0-6a3 3 0 0 1 0 6m10-1a3 3 0 1 0 0 6a3 3 0 0 0 0-6M6.209 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0zm10.75 7.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M6.209 2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarTuningBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
