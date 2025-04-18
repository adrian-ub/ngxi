import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAxeIcon],svg[token-branded-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6D47EC" d="M11.91 10.773L7.33 3l4.579 4.804L16.742 3z"></svg:path><svg:path fill="#193FE0" d="M12.017 10.61L16.742 3l-1.716 1.71zM9.13 4.884L7.331 3l4.5 7.633z"></svg:path><svg:path fill="#3052F1" d="M11.91 13.227L7.33 21l4.579-4.804L16.742 21z"></svg:path><svg:path fill="#193FE0" d="M12.017 13.39L16.742 21l-1.716-1.71l-3.01-5.906zM9.13 19.116L7.331 21l4.5-7.633z"></svg:path><svg:path fill="url(#tokenBrandedAxe0)" d="M7.742 12.05L3 7.248l4.09-4.145l4.87 7.683l4.95-7.683L21 7.247l-4.742 4.804L21 16.854L16.91 21l-4.95-7.706L7.09 21L3 16.854z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAxe0" x1="12" x2="12" y1="3.102" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DD76F9"></svg:stop><svg:stop offset="1" stop-color="#00C1E3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAxeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
