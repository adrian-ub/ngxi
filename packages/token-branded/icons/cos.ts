import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCosIcon],svg[token-branded-cos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCos0)" d="M13.043 3c3.583 0 6.063 2.188 6.919 3.364c-.692.962-2.577 1.3-4.056.512a6.2 6.2 0 0 0-2.863-.754c-3.128 0-4.917 2.38-5.423 3.628H4.358C5.612 5.7 8.908 3 13.043 3"></svg:path><svg:path fill="url(#tokenBrandedCos1)" d="M13.067 21c3.583 0 6.063-2.188 6.918-3.364c-.691-.967-2.581-1.3-4.061-.512a6.2 6.2 0 0 1-2.857.754c-3.128 0-4.917-2.38-5.423-3.628H4.381C5.631 18.3 8.932 21 13.067 21"></svg:path><svg:path fill="url(#tokenBrandedCos2)" d="M7.716 17.76a4.98 4.98 0 0 1-3.364-3.51h3.28a6.01 6.01 0 0 0 5.383 3.628c-.844.225-3.06.551-5.299-.118"></svg:path><svg:path fill="url(#tokenBrandedCos3)" d="M7.694 6.24a4.98 4.98 0 0 0-3.358 3.51h3.279c1.35-2.965 4.163-3.668 5.4-3.629c-.844-.225-3.077-.551-5.321.118"></svg:path><svg:path fill="url(#tokenBrandedCos4)" d="M6.265 13.688a1.688 1.688 0 1 0 0-3.376a1.688 1.688 0 0 0 0 3.376"></svg:path><svg:path fill="url(#tokenBrandedCos5)" d="M5.702 13.688a1.688 1.688 0 1 0 0-3.376a1.688 1.688 0 0 0 0 3.376"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCos0" x1="13.801" x2="12.571" y1="3" y2="11.733" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0DC4FA"></svg:stop><svg:stop offset="1" stop-color="#2797FD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCos1" x1="12.807" x2="12.807" y1="21" y2="12.12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0DC4FA"></svg:stop><svg:stop offset="1" stop-color="#2797FD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCos2" x1="17.153" x2="3.481" y1="21.055" y2="17.014" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6619D1"></svg:stop><svg:stop offset="1" stop-color="#2A71F6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCos3" x1="18.256" x2="3.786" y1="2.945" y2="6.735" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6619D1"></svg:stop><svg:stop offset="1" stop-color="#2A71F6" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCos4" x1="17.349" x2="9.54" y1="6.09" y2="20.261" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F7D037"></svg:stop><svg:stop offset="1" stop-color="#F36F43"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCos5" x1="6.934" x2="4.538" y1="10.847" y2="13.052" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5F24D6"></svg:stop><svg:stop offset="1" stop-color="#3069F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
