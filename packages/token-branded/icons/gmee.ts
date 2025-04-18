import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGmeeIcon],svg[token-branded-gmee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedGmee0)" d="M10.75 3h3v1.135c3.26.53 4.76 2.615 5.28 5.365h-3.68c-.495-1.22-1.5-2-3.35-2c-2.465 0-3.75 1.95-3.75 4.505c0 2.56 1.37 4.38 3.75 4.49c2.11.1 3.125-.95 3.53-2.495h-2.78v-2.5h6.49l.01.62c0 3.98-1.25 7.285-5.5 7.81V21h-3v-1.145c-3.83-.675-6-3.675-6-7.735c0-4.075 2.05-7.45 6-8.03z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedGmee0" x1="6.195" x2="17.987" y1="18.075" y2="7.786" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5945FC"></svg:stop><svg:stop offset="1" stop-color="#3D9EEF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedGmeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
