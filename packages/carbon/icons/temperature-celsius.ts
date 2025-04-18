import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTemperatureCelsiusIcon],svg[carbon-temperature-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 18h-6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6v2h-6v10h6Z"></svg:path><svg:circle cx="18" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 20.184V12H8v8.184a3 3 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3"></svg:path>`,
})
export class CarbonTemperatureCelsiusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
