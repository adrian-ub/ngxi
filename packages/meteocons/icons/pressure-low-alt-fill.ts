import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureLowAltFillIcon],svg[meteocons-pressure-low-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsPressureLowAltFill0" x1="184.3" x2="275.4" y1="192.2" y2="349.9" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#3392d6"></svg:stop><svg:stop offset=".5" stop-color="#3392d6"></svg:stop><svg:stop offset="1" stop-color="#2477b2"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#meteoconsPressureLowAltFill0)" stroke="#2885c7" stroke-miterlimit="10" stroke-width="4" d="M234.3 182v120.6H310V330H202V182Z"></svg:path>`,
})
export class MeteoconsPressureLowAltFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
