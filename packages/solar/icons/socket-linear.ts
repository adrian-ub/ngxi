import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSocketLinearIcon],svg[solar-socket-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 18v-1.5m0-9V6"></svg:path><svg:circle cx="14" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="12" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class SolarSocketLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
