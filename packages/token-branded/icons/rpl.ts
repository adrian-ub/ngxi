import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRplIcon],svg[token-branded-rpl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRpl0)" d="M12 20.34a8.399 8.399 0 1 0 0-16.797a8.399 8.399 0 0 0 0 16.797"></svg:path><svg:path fill="#FF7534" fill-rule="evenodd" d="M12 20.459A8.457 8.457 0 0 0 20.458 12A8.458 8.458 0 1 0 12 20.459m0-.517A7.941 7.941 0 1 0 12 4.06a7.941 7.941 0 0 0 0 15.882" clip-rule="evenodd"></svg:path><svg:path fill="#FFD58D" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-.53A8.47 8.47 0 0 0 20.47 12A8.47 8.47 0 0 0 12 3.53A8.47 8.47 0 0 0 3.53 12A8.47 8.47 0 0 0 12 20.47" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="m9.658 11.169l-.864 1.034l1.214.455c.017.459.127.65.18.689l-.463.427l.463.473l.455-.473c.252.093.523.126.79.096l.427 1.241l1.07-.974l.268-1.192c2.473-2.249 2.75-4.043 2.58-4.66c-2.19-.156-4.15 1.646-4.855 2.567zm.052 3.512l-3.669 3.385l-.387-.42l3.669-3.385zm-1.176.079l-3.01 2.752l-.387-.422l3.011-2.753zm1.088 1.053l-3.037 2.792l-.386-.421l3.036-2.791zm3.277-4.075a.707.707 0 1 0 0-1.414a.707.707 0 0 0 0 1.414" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRpl0" x1="4.451" x2="21" y1="18.034" y2="5.848" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB9533"></svg:stop><svg:stop offset=".261" stop-color="#FEBA67"></svg:stop><svg:stop offset=".747" stop-color="#FF9976"></svg:stop><svg:stop offset="1" stop-color="#FF6350"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRplIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
