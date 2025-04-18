import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLittIcon],svg[token-branded-litt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLitt0)" d="M10.74 7.157h2.561c.416-.046 1.19-.48 1.002-1.874c-.005-.037-.06-.055-.093-.023a2.9 2.9 0 0 1-1.024.692c.046-.069.138-.304.138-.706c0-.396-.355-.876-.54-1.066a1.27 1.27 0 0 1-.263-1.116a.046.046 0 0 0-.07-.055a3.14 3.14 0 0 0-1.67 2.662a1.5 1.5 0 0 1-.42-.715c-.008-.046-.073-.06-.096-.019c-.401.646-.784 1.837.475 2.22m-.756.715v.67c0 .045.06.138.276.198c.217.055.346.341.356.475v2.907c0 .032-.028.088-.074.143a4.5 4.5 0 0 0-3.156 4.254C7.386 18.993 9.453 21 12 21s4.614-2.007 4.614-4.48a4.5 4.5 0 0 0-3.151-4.255c-.046-.056-.079-.11-.079-.148V9.215c.01-.134.148-.415.36-.475c.217-.06.277-.157.277-.199v-.669a.25.25 0 0 0-.25-.254h-3.538a.25.25 0 0 0-.25.254m-1.8 8.098a2.04 2.04 0 0 1 2.076-1.624c.974 0 1.357.461 1.74.937c.397.489.803.983 1.86.983c.35-.006.696-.084 1.015-.231c.355-.208.853-.139.89.383v.101c0 2.045-1.707 3.701-3.806 3.701a3.756 3.756 0 0 1-3.77-4.245zm1.97 1.338a.924.924 0 1 0 0-1.847a.924.924 0 0 0 0 1.847m2.769.462a.461.461 0 1 0 0-.923a.461.461 0 0 0 0 .923"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLitt0" x1="8.07" x2="19.731" y1="5.083" y2="12.913" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#33AAC2"></svg:stop><svg:stop offset=".51" stop-color="#47B6CA"></svg:stop><svg:stop offset="1" stop-color="#92E5EB"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLittIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
