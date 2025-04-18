import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureCelsiusAltIcon],svg[carbon-temperature-celsius-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 27h-9a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h9v2h-9v14h9zM8 13a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path>`,
})
export class CarbonTemperatureCelsiusAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
