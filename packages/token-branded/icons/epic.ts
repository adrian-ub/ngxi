import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEpicIcon],svg[token-branded-epic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEpic0)" d="M7.765 14.646v-5.03l6.088-3.44l-1.852-1.06l-6.354 3.442v6.882l6.354 3.706l6.352-3.441v-2.118L12 17.028z"></svg:path><svg:path fill="url(#tokenBrandedEpic1)" d="m14.912 7.5l.794-.529l1.589 1.059l-.795.53zm-5.558 5.03v-1.853l5.029-2.912l1.588 1.059z"></svg:path><svg:path fill="url(#tokenBrandedEpic2)" d="m17.03 10.41l-6.353 3.707l1.588 1.059l4.765-2.912z"></svg:path><svg:path fill="url(#tokenBrandedEpic3)" d="m18.353 11.47l-1.059.529v-1.853l1.06-.53z"></svg:path><svg:path fill="url(#tokenBrandedEpic4)" fill-rule="evenodd" d="M12 20.47a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94m0 .53a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEpic0" x1="3.375" x2="21.375" y1="14.886" y2="14.886" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B28947"></svg:stop><svg:stop offset=".16" stop-color="#F9CE97"></svg:stop><svg:stop offset=".52" stop-color="#B08656"></svg:stop><svg:stop offset=".83" stop-color="#F7CF89"></svg:stop><svg:stop offset="1" stop-color="#B68E5D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEpic1" x1="16.801" x2="1.056" y1="8.143" y2="14.372" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CAC5C1"></svg:stop><svg:stop offset=".47" stop-color="#D3CDCD"></svg:stop><svg:stop offset="1" stop-color="#6D6D6D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEpic2" x1="24.751" x2="3.27" y1="3.999" y2="14.31" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#ACACAC"></svg:stop><svg:stop offset=".5" stop-color="#E5DDDA"></svg:stop><svg:stop offset="1" stop-color="#747474"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEpic3" x1="21" x2="-30.594" y1="10.999" y2="85.295" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#ACACAC"></svg:stop><svg:stop offset=".5" stop-color="#E5DDDA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEpic4" x1="7.235" x2="16.5" y1="4.588" y2="19.941" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F4E9CD"></svg:stop><svg:stop offset="1" stop-color="#F4F2DA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEpicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
