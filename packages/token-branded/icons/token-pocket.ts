import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTokenPocketIcon],svg[token-branded-token-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTokenPocket0)" d="M15.35 10.793v4.527a4.6 4.6 0 0 0 .936.117h.032v-3.6a1.04 1.04 0 0 1-.968-1.044"></svg:path><svg:path fill="#2980FE" d="M15.348 10.794H11.78v6.485c0 .307.246.555.55.555h2.467c.304 0 .55-.248.55-.555zm-5.29-4.644H3.55a.55.55 0 0 0-.55.554v2.25c0 .307.246.555.55.555h2.095v7.787c0 .306.246.554.55.554H8.54c.304 0 .55-.248.55-.554V9.509h.959c.92 0 1.667-.754 1.667-1.68a1.66 1.66 0 0 0-1.658-1.679"></svg:path><svg:path fill="#2980FE" d="M16.39 6.15c-2.545 0-4.61 2.08-4.61 4.644a4.64 4.64 0 0 0 3.57 4.526v-4.526c0-.578.467-1.047 1.04-1.047s1.04.47 1.04 1.047a1.04 1.04 0 0 1-1.04 1.046v3.597q.135 0 .265-.006C19.077 15.29 21 13.269 21 10.794c.003-2.564-2.062-4.644-4.61-4.644"></svg:path><svg:path fill="#2980FE" d="M16.39 15.437V11.84q-.037 0-.075-.003v3.6z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTokenPocket0" x1="16.391" x2="15.351" y1="13.116" y2="13.116" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2980FE"></svg:stop><svg:stop offset=".967" stop-color="#6CA8FF"></svg:stop><svg:stop offset="1" stop-color="#2980FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTokenPocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
