import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAccessibilityBrokenIcon],svg[solar-accessibility-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 7a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke-linecap="round" d="M18 10s-3.537 1.5-6 1.5S6 10 6 10m6 2v1.452m0 0a3 3 0 0 0 .476 1.623L15 19m-3-5.548a3 3 0 0 1-.476 1.623L9 19"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarAccessibilityBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
