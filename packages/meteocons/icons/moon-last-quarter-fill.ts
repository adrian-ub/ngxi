import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonLastQuarterFillIcon],svg[meteocons-moon-last-quarter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsMoonLastQuarterFill0" x1="12482" x2="12613.8" y1="147.7" y2="376" gradientTransform="matrix(-1 0 0 1 12799.71 0)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="#e5e7eb" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="17.4" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="url(#meteoconsMoonLastQuarterFill0)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M201.5 126.1a140.3 140.3 0 0 1 57-12.6a140 140 0 0 0-26.2 152.1A140 140 0 0 0 363 348c-14 17.3-25.7 24.1-47.5 33.9c-72.1 32-156 .8-187.5-69.8s1.5-153.9 73.6-186Z"></svg:path>`,
})
export class MeteoconsMoonLastQuarterFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
