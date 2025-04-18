import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUnoIcon],svg[token-branded-uno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedUno0)" d="M5.182 6H3v7.636a4.363 4.363 0 0 0 4.363 4.363h.546a4.363 4.363 0 0 0 4.363-4.363V6h-2.181v7.363a2.454 2.454 0 0 1-4.91 0zm8.181 3.273h2.182v8.18h-2.182z"></svg:path><svg:path fill="url(#tokenBrandedUno1)" d="M18 8.998a3 3 0 0 0-3 3v5.454h.546v-4.909a1.636 1.636 0 1 1 3.272 0v4.91H21v-5.455a3 3 0 0 0-3-3"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedUno0" x1="9.272" x2="9.272" y1="6" y2="17.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5079DD"></svg:stop><svg:stop offset="1" stop-color="#3E3BAC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUno1" x1="18" x2="18" y1="8.998" y2="17.452" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5079DD"></svg:stop><svg:stop offset="1" stop-color="#3E3BAC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedUnoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
