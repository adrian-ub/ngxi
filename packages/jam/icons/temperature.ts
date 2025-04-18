import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTemperatureIcon],svg[jam-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15a5 5 0 1 1-8-4V3a3 3 0 1 1 6 0v8c1.214.912 2 2.364 2 4m-3.201-2.401l-.799-.6V3a1 1 0 1 0-2 0v8.999l-.799.6a3 3 0 1 0 3.598 0M5 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamTemperatureIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
