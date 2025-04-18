import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuningSquareBrokenIcon],svg[solar-tuning-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="8" cy="10" r="2"></svg:circle><svg:circle cx="2" cy="2" r="2" transform="matrix(1 0 0 -1 14 16)"></svg:circle><svg:path stroke-linecap="round" d="M8 14v5m8-9V5M8 5v1m8 13v-1m6-6c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarTuningSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
