import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonFullFillIcon],svg[meteocons-moon-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsMoonFullFill0" x1="186" x2="326" y1="134.7" y2="377.3" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#86c3db"></svg:stop><svg:stop offset=".5" stop-color="#86c3db"></svg:stop><svg:stop offset="1" stop-color="#5eafcf"></svg:stop></svg:lineargradient></svg:defs><svg:circle cx="256" cy="256" r="140" fill="url(#meteoconsMoonFullFill0)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"></svg:circle>`,
})
export class MeteoconsMoonFullFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
