import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonWaxingGibbousFillIcon],svg[meteocons-moon-waxing-gibbous-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsMoonWaxingGibbousFill0" x1="193.9" x2="327.1" y1="143.9" y2="374.7" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="#e5e7eb" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="17.4" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="url(#meteoconsMoonWaxingGibbousFill0)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M391.4 214.8a134.1 134.1 0 0 0-155.6-95.1a135.2 135.2 0 0 1 13.8 31.9c20.7 73.2-22 151-95.4 173.8a145 145 0 0 1-14.8 3.6c31 52.5 94.7 78.7 156.6 59.6a142.6 142.6 0 0 0 95.4-173.8"></svg:path>`,
})
export class MeteoconsMoonWaxingGibbousFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
