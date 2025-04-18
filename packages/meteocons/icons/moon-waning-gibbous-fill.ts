import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonWaningGibbousFillIcon],svg[meteocons-moon-waning-gibbous-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsMoonWaningGibbousFill0" x1="12993.6" x2="13126.8" y1="143.9" y2="374.7" gradientTransform="matrix(-1 0 0 1 13312.32 0)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="#e5e7eb" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="17.4" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="url(#meteoconsMoonWaningGibbousFill0)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M121.2 214.8a134.1 134.1 0 0 1 155.6-95.1a135.6 135.6 0 0 0-13.8 31.9c-20.7 73.2 22 151 95.4 173.8a145 145 0 0 0 14.9 3.6a134.6 134.6 0 0 1-156.7 59.6a142.6 142.6 0 0 1-95.4-173.8"></svg:path>`,
})
export class MeteoconsMoonWaningGibbousFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
