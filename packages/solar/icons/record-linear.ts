import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordLinearIcon],svg[solar-record-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"></svg:circle>`,
})
export class SolarRecordLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
