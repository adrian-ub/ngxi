import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuningBrokenIcon],svg[solar-tuning-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 14.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-10-5a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z"></svg:path><svg:path stroke-linecap="round" d="M7 13v5m0 3v1m10-11V6m0-3V2m0 20v-4M7 2v4"></svg:path></svg:g>`,
})
export class SolarTuningBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
