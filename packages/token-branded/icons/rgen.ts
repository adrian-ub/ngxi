import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRgenIcon],svg[token-branded-rgen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRgen0)" d="m5.441 8.9l5.65-5.594l1.155.98l-5.73 5.665l5.51 5.449l5.51-5.45l-.936-.924l-1.075 1.065l-1-1.105l1.02-1.01a1.57 1.57 0 0 1 2.17.035l.805.8a1.6 1.6 0 0 1 .353 1.757a1.6 1.6 0 0 1-.353.522l-5.34 5.28a1.645 1.645 0 0 1-2.31 0L5.442 11a1.477 1.477 0 0 1 0-2.1"></svg:path><svg:path fill="url(#tokenBrandedRgen1)" d="m14.614 8.885l.485-.48a2 2 0 0 0 .52 1.7l2.845 2.815l-.535 1.52l-3.315-3.275a1.6 1.6 0 0 1 0-2.28"></svg:path><svg:path fill="url(#tokenBrandedRgen2)" d="M11.83 4.271c-.42-.39-1.22-.235-1.59-.12l.62-.68a1.645 1.645 0 0 1 2.305 0l.855.85a1.6 1.6 0 0 1 0 2.275L6.45 14.08l5.58 5.52c1.61-1.585 4.96-4.89 5.47-5.405c.51-.52.35-1.575.2-2.035l.8.785a1.6 1.6 0 0 1 .353 1.758a1.6 1.6 0 0 1-.353.522l-5.405 5.34a1.52 1.52 0 0 1-2.13 0L5.561 15.22a1.6 1.6 0 0 1 0-2.28l7.57-7.484z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRgen0" x1="5.322" x2="17.058" y1="12.134" y2="9.364" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#873B9F"></svg:stop><svg:stop offset=".52" stop-color="#359DDA"></svg:stop><svg:stop offset=".72" stop-color="#2867AC"></svg:stop><svg:stop offset=".85" stop-color="#327EC2"></svg:stop><svg:stop offset="1" stop-color="#27ABE3"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRgen1" x1="5.575" x2="17.837" y1="8.1" y2="20.634" gradientUnits="userSpaceOnUse"><svg:stop offset=".31" stop-color="#2CAAE2"></svg:stop><svg:stop offset="1" stop-color="#286DB0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRgen2" x1="5.081" x2="12.935" y1="14.62" y2="14.925" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#813B9D"></svg:stop><svg:stop offset="1" stop-color="#24ADE3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRgenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
