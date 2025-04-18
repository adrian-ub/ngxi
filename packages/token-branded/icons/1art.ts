import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBranded1artIcon],svg[token-branded-1art-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBranded1art0)" d="M14.179 3.276c1.098-.696 2.592.006 2.622 1.212v14.988c0 .84-.876 1.524-1.8 1.524c-.912 0-1.782-.666-1.8-1.5V7.956s-2.442 1.518-3.618 2.124c-.138.072-.288.12-.462.126c-.204 0-.42-.036-.63-.114c-.69-.264-1.32-.93-1.29-1.692c.017-.444.216-.864.654-1.152l.024-.018l6.3-3.96z"></svg:path><svg:defs><svg:lineargradient id="tokenBranded1art0" x1="15.686" x2="5.921" y1="7.018" y2="10.375" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#836DF7"></svg:stop><svg:stop offset=".28" stop-color="#2E8ACA"></svg:stop><svg:stop offset=".5" stop-color="#4978D6"></svg:stop><svg:stop offset="1" stop-color="#A672DC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBranded1artIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
