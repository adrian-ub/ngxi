import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBedsideTable4LineDuotoneIcon],svg[solar-bedside-table-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 22v-1.5M5 22v-1.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 12v3m-6-3v3"></svg:path><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12z"></svg:path><svg:path stroke-linecap="round" d="M12 20V8M2 8h20" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBedsideTable4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
