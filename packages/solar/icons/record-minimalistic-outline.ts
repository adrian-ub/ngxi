import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticOutlineIcon],svg[solar-record-minimalistic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.464 15.25A4.75 4.75 0 1 0 6 16.75h12a4.75 4.75 0 1 0-3.464-1.5zM6 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m12 6.5a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordMinimalisticOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
