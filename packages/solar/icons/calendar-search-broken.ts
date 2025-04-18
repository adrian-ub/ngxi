import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchBrokenIcon],svg[solar-calendar-search-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 18h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4M7 4V2.5M17 4V2.5"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M20.5 20.5L22 22m-.5-13H10.75M2 9h3.875"></svg:path></svg:g>`,
})
export class SolarCalendarSearchBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
