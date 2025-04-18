import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonWaxingCrescentFillIcon],svg[meteocons-moon-waxing-crescent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsMoonWaxingCrescentFill0" x1="211.4" x2="330.3" y1="166.7" y2="372.6" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="#e5e7eb" stroke-dasharray="16.9 56.2" stroke-linecap="round" stroke-linejoin="round" stroke-width="17.4" d="M384 256a128 128 0 0 0-128-128c-169.8 6.7-169.7 249.3 0 256a128 128 0 0 0 128-128"></svg:path><svg:path fill="url(#meteoconsMoonWaxingCrescentFill0)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" d="M310.3 127.5a142 142 0 0 0-19-7l.7.6h0c92.2 96.7 21 256.7-112.6 252.8l-.8-.1a141.4 141.4 0 0 0 17.8 9.5a140 140 0 1 0 114-255.8Z"></svg:path>`,
})
export class MeteoconsMoonWaxingCrescentFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
