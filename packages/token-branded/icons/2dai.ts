import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBranded2daiIcon],svg[token-branded-2dai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBranded2dai0)" d="M19.744 9.697H21v6.28h-1.256z"></svg:path><svg:path fill="url(#tokenBranded2dai1)" d="m18.907 13.047l-3.14-5.023l-3.14 5.023h1.457l1.683-2.692l1.683 2.692z"></svg:path><svg:path fill="#F15A38" d="m13.918 15.976l1.1-2.16h1.5l1.1 2.16l1.708-3.349H12.21z"></svg:path><svg:path fill="url(#tokenBranded2dai2)" fill-rule="evenodd" d="M8.441 11.703v1.926c.026.083.168.255.566.255c.49 0 1.109-.385 1.109-1.24c0-.849-.896-1.272-1.315-1.272h-.037a.326.326 0 0 0-.323.331m.252.23v1.444c.016.067.121.197.397.197c.348 0 .783-.293.783-.933s-.628-.959-.93-.959H8.92c-.126 0-.226.113-.226.251" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBranded2dai3)" fill-rule="evenodd" d="m3 11.254l1.256-.72h1.607l.904.87v1.407a3 3 0 0 1-.326.268c-.176.134-.335.255-.394.385h.72v1.675H3.494L3 14.909v-.922c.56-.401 1.725-1.297 1.921-1.657c-.096-.034-.774.192-1.096.31l-.46-.31zm.419-.017l1.025-.44h1.298l.607.683v1.1l-.72.922v.171h1.105v1.047H3.419v-.716c.435-.255 1.402-.92 1.783-1.54c-.071-.34-.264-.586-.419-.586c-.096 0-.536.142-.879.25l-.234.08z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBranded2dai4)" fill-rule="evenodd" d="M9.28 10.116H6.767v5.023h2.511a2.512 2.512 0 0 0 0-5.023m0 .418H7.185v4.186H9.28a2.094 2.094 0 0 0 0-4.186" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBranded2dai0" x1="21" x2="3" y1="10.382" y2="10.382" gradientUnits="userSpaceOnUse"><svg:stop offset=".32" stop-color="#F65C38"></svg:stop><svg:stop offset=".62" stop-color="#ED5438"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBranded2dai1" x1="15.648" x2="9.804" y1="11.404" y2="19.334" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F55D39"></svg:stop><svg:stop offset="1" stop-color="#D43155"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBranded2dai2" x1="12" x2="12" y1="8.024" y2="15.977" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#523C70"></svg:stop><svg:stop offset="1" stop-color="#726CAC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBranded2dai3" x1="5.28" x2="8.632" y1="9.049" y2="19.823" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#787BB1"></svg:stop><svg:stop offset=".43" stop-color="#40305F"></svg:stop><svg:stop offset="1" stop-color="#5A437C"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBranded2dai4" x1="9.279" x2="9.279" y1="10.116" y2="15.139" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#726CAC"></svg:stop><svg:stop offset="1" stop-color="#523C70"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBranded2daiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
