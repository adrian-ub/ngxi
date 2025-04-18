import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureHighAltFillIcon],svg[meteocons-pressure-high-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsPressureHighAltFill0" x1="209" x2="303" y1="174.5" y2="337.5" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f87171"></svg:stop><svg:stop offset=".5" stop-color="#f87171"></svg:stop><svg:stop offset="1" stop-color="#dc2626"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#meteoconsPressureHighAltFill0)" stroke="#ef4444" stroke-miterlimit="10" stroke-width="4" d="M285 239.2V182h31v148h-31v-63.4h-58V330h-31V182h31v57.2Z"></svg:path>`,
})
export class MeteoconsPressureHighAltFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
