import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuningSquare2BrokenIcon],svg[solar-tuning-square-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10 14a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z"></svg:path><svg:circle cx="2" cy="2" r="2" transform="matrix(0 -1 -1 0 16 10)"></svg:circle><svg:path stroke-linecap="round" d="M14 16h5m-9-8H5m0 8h1m13-8h-1m4 4c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarTuningSquare2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
