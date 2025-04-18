import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCalendarAddLineDuotoneIcon],svg[solar-calendar-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z"></svg:path><svg:path stroke-linecap="round" d="M18 16h-2m0 0h-2m2 0v-2m0 2v2"></svg:path><svg:path stroke-linecap="round" d="M7 4V2.5M17 4V2.5M2 9h20" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCalendarAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
