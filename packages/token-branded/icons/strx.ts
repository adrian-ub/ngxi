import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStrxIcon],svg[token-branded-strx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedStrx0)" d="M12.021 9.67L4.128 3l13.314 2.541zM10.443 21L3.53 3.688l8.153 6.724zm8.873-15.247l-6.31 5.188h4.95l-6.618 9.8l9.133-10.859h-4.395z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedStrx0" x1="5.596" x2="18.366" y1="5.218" y2="17.613" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#73D8E2"></svg:stop><svg:stop offset=".69" stop-color="#4950D4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedStrxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
