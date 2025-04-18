import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWeltIcon],svg[token-branded-welt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedWelt0)" d="M19.187 3.493a1.09 1.09 0 0 1-.014 1.218q-.124.18-.308.298L6.321 13.19a1.092 1.092 0 0 1-1.189-1.832l12.544-8.181a1.09 1.09 0 0 1 1.511.321zm-5.28 16.144a1.363 1.363 0 1 1-2.726 0a1.363 1.363 0 0 1 2.727 0m4.964-9.447a1.093 1.093 0 0 0-1.2-1.827L5.127 16.544a1.092 1.092 0 1 0 1.2 1.827z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedWelt0" x1="18.271" x2="4.636" y1="8.183" y2="16.91" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#CD5792"></svg:stop><svg:stop offset=".49" stop-color="#B041AD"></svg:stop><svg:stop offset="1" stop-color="#7F67CF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedWeltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
