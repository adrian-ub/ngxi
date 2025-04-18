import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKomIcon],svg[token-branded-kom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2891F9" d="M15.375 15.015v-1.89L17.625 12l.056 4.185z"></svg:path><svg:path fill="#2B6DEF" d="m10.712 12.022l5.26-3.06l.309-3.122l-8.258 3.657v2.525zM17.642 21l2.233-1.407l-11.272-6.502L6.1 14.385z"></svg:path><svg:path fill="#2891F9" d="M4.125 4.052L6.375 3v15.547L4.125 19.6zm11.25.326L17.625 3v5.946l-2.25 1.085z"></svg:path><svg:path fill="#2BBDF7" d="M19.875 4.322L17.625 3v5.906l2.25 1.125zm-11.25-.27L6.375 3v15.547l2.25 1.052z"></svg:path><svg:path fill="#2B6DEF" d="m6.375 18.187l-2.25 1.407L6.369 21l2.256-1.406zm11.25-9.562l-2.25 1.406l2.25 1.406l2.25-1.406z"></svg:path><svg:path fill="#2891F9" d="M6.375 9.446L17.625 3v2.773L6.375 12z"></svg:path><svg:path fill="url(#tokenBrandedKom0)" d="m6.375 11.999l13.5 7.594v-6.469l-2.25-1.125v3.937l-9.017-5.191z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKom0" x1="7.775" x2="20.049" y1="13.585" y2="13.585" gradientUnits="userSpaceOnUse"><svg:stop offset=".35" stop-color="#2B6DEF"></svg:stop><svg:stop offset=".76" stop-color="#2BBCF7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
