import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonWaningGibbousIcon],svg[meteocons-moon-waning-gibbous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="13.8" d="M130.9 218c17.8-63 80.2-100 143.4-87.7a124.8 124.8 0 0 0-12.7 29.5a131.5 131.5 0 0 0 88 160.1a128 128 0 0 0 13.6 3.4a124 124 0 0 1-144.3 55a131.6 131.6 0 0 1-88-160.3"></svg:path>`,
})
export class MeteoconsMoonWaningGibbousIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
