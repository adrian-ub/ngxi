import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHumidityIcon],svg[carbon-humidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.044A10 10 0 0 0 7 19a9 9 0 0 0 18 0a10.06 10.06 0 0 0-1.524-5.007M16 26a7.01 7.01 0 0 1-7-7a8 8 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.98 6.98 0 0 1 16 26.001"></svg:path>`,
})
export class CarbonHumidityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
