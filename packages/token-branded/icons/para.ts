import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedParaIcon],svg[token-branded-para-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPara0)" d="m3.923 9.87l7.996 4.318c.394.214.878.214 1.271 0l6.889-3.728a1.7 1.7 0 0 0 0-3.02L12.206 3.2a1.64 1.64 0 0 0-1.563 0L3.917 6.855a1.698 1.698 0 0 0 0 3.014z"></svg:path><svg:path fill="url(#tokenBrandedPara1)" d="m5.622 12.58l6.377 3.374c.422.225.939.225 1.35-.017l4.909-2.828l1.816.978a1.698 1.698 0 0 1 0 3.02l-6.883 3.728a1.32 1.32 0 0 1-1.27 0l-7.997-4.313a1.697 1.697 0 0 1-.006-3.02z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPara0" x1="2.998" x2="19.05" y1="12.163" y2="12.092" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#02DAFF"></svg:stop><svg:stop offset="1" stop-color="#5414F1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPara1" x1="3.001" x2="19.05" y1="15.425" y2="15.319" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FECF7B"></svg:stop><svg:stop offset="1" stop-color="#EF26A8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedParaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
