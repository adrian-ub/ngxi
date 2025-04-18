import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable3LineDuotoneIcon],svg[solar-bedside-table-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-1.5M5 22v-1.5" opacity=".5"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke-linecap="round" d="M9 15.5h6m-6-9h6"></svg:path><svg:path stroke-linecap="round" d="M2 11h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarBedsideTable3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
