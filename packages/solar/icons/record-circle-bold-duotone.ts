import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleBoldDuotoneIcon],svg[solar-record-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 12c0 .644.188 1.245.51 1.75h-2.52A3.25 3.25 0 1 0 8 15.25h8A3.25 3.25 0 1 0 12.75 12m1.5 0a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-4.5 0a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
