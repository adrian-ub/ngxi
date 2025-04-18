import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordBoldDuotoneIcon],svg[solar-record-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="7" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-3a7 7 0 1 0 0-14a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
