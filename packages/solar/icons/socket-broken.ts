import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSocketBrokenIcon],svg[solar-socket-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6.584 9.413a6 6 0 1 1 0 5.174M12 18v-1.5m0-9V6"></svg:path><svg:circle cx="14" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="12" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarSocketBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
