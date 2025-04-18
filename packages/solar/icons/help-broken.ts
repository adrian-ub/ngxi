import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHelpBrokenIcon],svg[solar-help-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="m15 9l4-4M5 19l4-4m0-6L5 5m14 14l-4-4"></svg:path><svg:path stroke-linecap="round" d="M9.412 2.339a9.95 9.95 0 0 1 5.176.002c5.335 1.43 8.5 6.913 7.071 12.247c-1.43 5.335-6.912 8.5-12.247 7.071S.912 14.747 2.34 9.412a9.95 9.95 0 0 1 2.586-4.484"></svg:path></svg:g>`,
})
export class SolarHelpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
