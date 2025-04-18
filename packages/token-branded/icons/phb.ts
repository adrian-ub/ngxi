import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPhbIcon],svg[token-branded-phb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E61E28" d="M11.986 14.362c.016-.031.051-.013.068 0l.326 3.824l-.36.34l-.378-.34c.108-1.262.329-3.793.344-3.824"></svg:path><svg:path fill="url(#tokenBrandedPhb0)" d="m11.249 11.573l.344-.428l.418.887l.424-.886l.344.427l-.768 1.655z"></svg:path><svg:path fill="url(#tokenBrandedPhb1)" d="m11.648 10.668l.369-.378l.374.378l-.375.687z"></svg:path><svg:path fill="url(#tokenBrandedPhb2)" d="m4.974 10.96l-.335-.978l6.802 2.861l.432.756l-.591 4.271l-.517-.48l.855-3.791z"></svg:path><svg:path fill="url(#tokenBrandedPhb3)" d="m19.027 10.96l.335-.978l-6.802 2.861l-.433.756l.592 4.271l.517-.48l-.855-3.791z"></svg:path><svg:path fill="url(#tokenBrandedPhb4)" d="M10.163 10.483L3 5.475l.713 1.954l6.876 3.856z"></svg:path><svg:path fill="url(#tokenBrandedPhb5)" d="M13.837 10.483L21 5.475l-.713 1.954l-6.876 3.856z"></svg:path><svg:path fill="url(#tokenBrandedPhb6)" d="m4.45 9.462l-.537-1.487l6.875 3.691l.424.787z"></svg:path><svg:path fill="url(#tokenBrandedPhb7)" d="m19.55 9.462l.538-1.487l-6.876 3.691l-.423.787z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPhb0" x1="11.997" x2="11.997" y1="5.475" y2="18.526" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E9231E"></svg:stop><svg:stop offset="1" stop-color="#E42021"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPhb1" x1="12" x2="12" y1="5.475" y2="18.525" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E53A2D"></svg:stop><svg:stop offset="1" stop-color="#E82620"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPhb2" x1="3" x2="15.288" y1="5.475" y2="18.774" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F0341E"></svg:stop><svg:stop offset="1" stop-color="#E31D26"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPhb3" x1="21" x2="8.711" y1="5.475" y2="18.774" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F0341E"></svg:stop><svg:stop offset="1" stop-color="#E31D26"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPhb4" x1="3.312" x2="20.385" y1="5.475" y2="19.286" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F7691F"></svg:stop><svg:stop offset="1" stop-color="#E9342A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPhb5" x1="20.689" x2="3.615" y1="5.475" y2="19.286" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F7691F"></svg:stop><svg:stop offset="1" stop-color="#E9342A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPhb6" x1="3" x2="22.493" y1="5.475" y2="15.154" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EE511F"></svg:stop><svg:stop offset="1" stop-color="#EE1B21"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPhb7" x1="20.088" x2="12.758" y1="7.975" y2="12.274" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#EE511F"></svg:stop><svg:stop offset="1" stop-color="#EE1B21"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPhbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
