import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureMinIcon],svg[carbon-temperature-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-8 7a3 3 0 0 1-6 0z"></svg:path><svg:path fill="currentColor" d="M30 22H15.92A7 7 0 0 0 14 18.11V7A5 5 0 0 0 4 7v11.11A6.995 6.995 0 1 0 15.92 24H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28"></svg:path>`,
})
export class CarbonTemperatureMinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
