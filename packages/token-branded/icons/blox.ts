import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBloxIcon],svg[token-branded-blox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBlox0)" d="M11.437 11.399L3 7.799v9L11.437 21z"></svg:path><svg:path fill="url(#tokenBrandedBlox1)" d="M12 3L3.602 6.6L12 10.2l8.398-3.6z"></svg:path><svg:path fill="url(#tokenBrandedBlox2)" d="m21 7.5l-8.437 3.898v9.601L21 16.798z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBlox0" x1="22.199" x2="22.199" y1="-3.541" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#84F9C8"></svg:stop><svg:stop offset="1" stop-color="#7FB7F6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBlox1" x1="12" x2="12" y1="3" y2="47.998" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#84F9C8"></svg:stop><svg:stop offset="1" stop-color="#7FB7F6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBlox2" x1="12" x2="12" y1="3" y2="20.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#84F9C8"></svg:stop><svg:stop offset="1" stop-color="#7FB7F6"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBloxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
