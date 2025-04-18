import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAirbudsCaseBrokenIcon],svg[solar-airbuds-case-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M3 13v-2c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106c-.531-.731-.767-1.635-.871-2.939"></svg:path><svg:path stroke-linecap="round" d="M15 7a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4h2"></svg:path><svg:path d="M21 9h-3.5M7 9H3"></svg:path></svg:g>`,
})
export class SolarAirbudsCaseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
