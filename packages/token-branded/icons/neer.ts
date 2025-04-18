import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNeerIcon],svg[token-branded-neer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNeer0)" d="M3 5.959v7.582c0 .079.062.146.14.146h3.094c.085 0 .141-.067.141-.146v-3.65c0-.08.068-.141.146-.141h2.526c.079 0 .14-.068.14-.152v-3.64a.14.14 0 0 0-.14-.146H3.141A.14.14 0 0 0 3 5.96m0 8.988c0-.073.056-.134.135-.134H6.24c.073 0 .135.056.135.134v3.105a.133.133 0 0 1-.135.135H3.135A.135.135 0 0 1 3 18.052zm7.313 3.105V5.96c0-.073.061-.14.14-.14h8.134a.15.15 0 0 1 .101.044l2.273 2.261a.2.2 0 0 1 .039.102v9.826c0 .08-.062.135-.14.135h-3.106c-.078 0-.129-.056-.129-.135V9.891c0-.08-.073-.141-.152-.141h-3.617c-.078 0-.168.056-.168.14v8.162c0 .08-.04.135-.113.135h-3.122c-.079 0-.14-.056-.14-.135"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNeer0" x1="6.115" x2="13.861" y1="7.633" y2="19.23" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0BD4F9"></svg:stop><svg:stop offset=".34" stop-color="#335DF7"></svg:stop><svg:stop offset=".62" stop-color="#5551CB"></svg:stop><svg:stop offset=".93" stop-color="#702EB6"></svg:stop><svg:stop offset="1" stop-color="#4E2EAD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNeerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
