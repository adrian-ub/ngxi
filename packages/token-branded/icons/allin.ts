import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAllinIcon],svg[token-branded-allin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAllin0)" fill-rule="evenodd" d="M3 19.875h4.45l.652-2.25h5.546l.652 2.25h4.45l-5.372-15.75H8.372zm9.562-5.625l-1.687-5.676l-1.688 5.676z" clip-rule="evenodd"></svg:path><svg:path fill="#77EBEF" d="M17.063 4.125H21v15.75h-3.937z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAllin0" x1="5.044" x2="19.36" y1="15.937" y2="15.937" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFEFF"></svg:stop><svg:stop offset=".69" stop-color="#E2FAFC"></svg:stop><svg:stop offset="1" stop-color="#7AEBEF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAllinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
