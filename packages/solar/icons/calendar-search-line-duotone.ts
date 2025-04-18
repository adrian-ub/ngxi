import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCalendarSearchLineDuotoneIcon],svg[solar-calendar-search-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14v-2c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12v2c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle><svg:path stroke-linecap="round" d="M20.5 20.5L22 22"></svg:path></svg:g>`,
})
export class SolarCalendarSearchLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
