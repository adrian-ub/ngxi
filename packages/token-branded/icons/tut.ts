import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTutIcon],svg[token-branded-tut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTut0)" fill-rule="evenodd" d="M11.993 20.994a8.994 8.994 0 1 0 0-17.988a8.994 8.994 0 0 0 0 17.988m3.373-8.993l-5.059-2.81v5.62z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedTut1)" d="M15.867 3.877c1.27 1.923 2.686 5.784-.5 8.123l-5.06 2.81c0 1.5 1.012 4.553 5.06 4.778c.51.028 1.005.022 1.466-.006a8.987 8.987 0 0 0-.966-15.705"></svg:path><svg:path fill="url(#tokenBrandedTut2)" d="M3 12.046c.63-1.462 2.063-3.418 4.497-3.418c.376 0 1.461.112 2.81.562L15.366 12c.748-.562 2.248-2.08 2.248-3.653c0-1.686-.618-3.159-1.675-4.43A8.993 8.993 0 0 0 3 12.046"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTut0" x1="12" x2="12" y1="3.006" y2="20.994" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#036276"></svg:stop><svg:stop offset=".36" stop-color="#066579"></svg:stop><svg:stop offset=".7" stop-color="#039AAB"></svg:stop><svg:stop offset="1" stop-color="#11B7C5"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedTut1" x1="11.989" x2="11.989" y1="3.005" y2="20.991" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00B8C2"></svg:stop><svg:stop offset="1" stop-color="#046179"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedTut2" x1="17.895" x2="3.562" y1="8.628" y2="9.752" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#005F71"></svg:stop><svg:stop offset="1" stop-color="#02BCCD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
