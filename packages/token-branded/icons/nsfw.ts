import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNsfwIcon],svg[token-branded-nsfw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNsfw0)" d="M12 19v-8.5H3z"></svg:path><svg:path fill="url(#tokenBrandedNsfw1)" d="M12 19v-8.5h9z"></svg:path><svg:path fill="url(#tokenBrandedNsfw2)" d="M16.75 5L12 10.5h9z"></svg:path><svg:path fill="url(#tokenBrandedNsfw3)" d="M7.25 5L12 10.5H3z"></svg:path><svg:path fill="#8E04E2" d="M12 10.5V7.185L16.75 5z"></svg:path><svg:path fill="#6801C2" d="M12 10.5V7.185L7.25 5z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNsfw0" x1="7.5" x2="17.456" y1="7.471" y2="20.528" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7A03B3"></svg:stop><svg:stop offset="1" stop-color="#A300D4"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNsfw1" x1="3" x2="10.131" y1="5" y2="14.621" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7A03B3"></svg:stop><svg:stop offset="1" stop-color="#8C08A0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNsfw2" x1="12" x2="12" y1="5" y2="19" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8605B8"></svg:stop><svg:stop offset="1" stop-color="#9300CB"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNsfw3" x1="7" x2="23.102" y1="10.727" y2="16.631" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4902CC"></svg:stop><svg:stop offset="1" stop-color="#8C04EE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNsfwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
