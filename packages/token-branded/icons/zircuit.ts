import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZircuitIcon],svg[token-branded-zircuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedZircuit0)" fill-rule="evenodd" d="M3 12a9 9 0 1 1 15.817 5.876l-6.805-6.806l-5.853 5.852l-.966.966A8.95 8.95 0 0 1 3 12m15.589 3.507l.082-.164c.517-1.03.79-2.186.79-3.343c0-4.113-3.347-7.46-7.46-7.46c-4.115 0-7.46 3.347-7.46 7.46c0 1.163.275 2.324.796 3.358l.083.164l6.592-6.592zM12 21c2.24 0 4.29-.819 5.866-2.174l-5.854-5.854l-5.865 5.865A8.95 8.95 0 0 0 12 21" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedZircuit0" x1="12" x2="12.027" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#169E00"></svg:stop><svg:stop offset=".49" stop-color="#00C537"></svg:stop><svg:stop offset="1" stop-color="#00B1C9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedZircuitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
