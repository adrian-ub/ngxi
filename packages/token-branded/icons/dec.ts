import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDecIcon],svg[token-branded-dec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDec0)" d="M16.5 4.059h-9l4.5 7.944z"></svg:path><svg:path fill="url(#tokenBrandedDec1)" d="M16.5 4.059L12 12.003l4.5 7.938l4.5-7.938z"></svg:path><svg:path fill="url(#tokenBrandedDec2)" d="M7.5 4.059L3 12.003l4.5 7.938l4.5-7.938z"></svg:path><svg:path fill="#74C5EE" d="m12 12.002l-4.5 7.94h9z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDec0" x1="12.001" x2="12.001" y1="20.185" y2="3.326" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#74C5EE"></svg:stop><svg:stop offset=".32" stop-color="#73C2EF"></svg:stop><svg:stop offset=".53" stop-color="#6EB9F1"></svg:stop><svg:stop offset=".72" stop-color="#66AAF5"></svg:stop><svg:stop offset=".88" stop-color="#5A95FA"></svg:stop><svg:stop offset="1" stop-color="#4F80FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDec1" x1="2.981" x2="21.239" y1="12.003" y2="12.003" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#96D4C8"></svg:stop><svg:stop offset="1" stop-color="#42C0C6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDec2" x1="3" x2="21" y1="12.003" y2="12.003" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4F80FF"></svg:stop><svg:stop offset=".28" stop-color="#4E7FFC"></svg:stop><svg:stop offset=".48" stop-color="#4A7CF3"></svg:stop><svg:stop offset=".64" stop-color="#4477E4"></svg:stop><svg:stop offset=".79" stop-color="#3C6FCE"></svg:stop><svg:stop offset=".93" stop-color="#3166B3"></svg:stop><svg:stop offset="1" stop-color="#2B60A3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDecIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
