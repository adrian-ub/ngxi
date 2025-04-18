import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticBoldDuotoneIcon],svg[solar-record-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-12 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill="currentColor" d="M6 16h12a4 4 0 0 1-2.646-1H8.646c-.705.622-1.632 1-2.646 1" opacity=".5"></svg:path>`,
})
export class SolarRecordMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
