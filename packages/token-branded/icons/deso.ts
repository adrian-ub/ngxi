import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDesoIcon],svg[token-branded-deso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDeso0)" d="M4.5 3v4.5l11.4 6.576L4.5 21h9.282c3.162 0 5.718-2.22 5.718-4.95V12z"></svg:path><svg:path fill="url(#tokenBrandedDeso1)" d="m4.5 3l15 9V7.95C19.5 5.214 16.938 3 13.782 3z"></svg:path><svg:path fill="url(#tokenBrandedDeso2)" d="m12.21 11.946l-7.71 4.56V21l11.4-6.924z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDeso0" x1="4.5" x2="17.28" y1="6" y2="19.014" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3FA3FF"></svg:stop><svg:stop offset="1" stop-color="#F0F8FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDeso1" x1="4.5" x2="22.324" y1="3" y2="7.563" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#84C3FF"></svg:stop><svg:stop offset="1" stop-color="#FBFEFF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDeso2" x1="5.1" x2="14.034" y1="18.9" y2="13.692" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A8D5FF"></svg:stop><svg:stop offset="1" stop-color="#F6FBFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDesoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
