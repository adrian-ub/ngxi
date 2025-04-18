import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVlxpadIcon],svg[token-branded-vlxpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedVlxpad0)" d="M5.735 5.999H3l5 8.5l3.75-6L10.5 6l-2.3 4.1z"></svg:path><svg:path fill="url(#tokenBrandedVlxpad1)" d="M21 5.999H10.5l1.25 2.5h4.5l-.5 1H12l1 2.5h4z"></svg:path><svg:path fill="url(#tokenBrandedVlxpad2)" d="m13 12l-1-2.5l-3.25 5.75A26 26 0 0 1 10 18s1.906-3.9 3-6"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedVlxpad0" x1="5.808" x2="21.001" y1="9.86" y2="9.86" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0753F7"></svg:stop><svg:stop offset="1" stop-color="#02CBC5"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedVlxpad1" x1="5.142" x2="19.209" y1="7.639" y2="7.639" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#02A7A1"></svg:stop><svg:stop offset="1" stop-color="#01E8BA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedVlxpad2" x1="12.845" x2="9.29" y1="10.376" y2="16.666" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#01DBC0"></svg:stop><svg:stop offset="1" stop-color="#03ACD3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedVlxpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
