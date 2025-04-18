import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRecordBoldIcon],svg[solar-record-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor"></svg:circle>`,
})
export class SolarRecordBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
