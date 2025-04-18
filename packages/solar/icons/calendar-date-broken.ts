import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCalendarDateBrokenIcon],svg[solar-calendar-date-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M7 4V2.5M17 4V2.5"></svg:path><svg:path stroke-linejoin="round" d="m9 14.5l1.5-1.5v4"></svg:path><svg:path d="M13 16v-2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0Zm8.5-7H10.75M2 9h3.875"></svg:path><svg:path d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-2c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828c-.653.654-1.528.943-2.828 1.07"></svg:path></svg:g>`,
})
export class SolarCalendarDateBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
