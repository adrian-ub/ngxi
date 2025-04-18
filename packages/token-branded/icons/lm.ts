import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLmIcon],svg[token-branded-lm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLm0)" d="m4.421 7.737l2.842 1.421v5.21L4.421 15.79z"></svg:path><svg:path fill="url(#tokenBrandedLm1)" d="m19.579 8.21l-2.842 1.422v5.21l2.842 1.422z"></svg:path><svg:path fill="#004F9F" d="M7.263 9.158L4.421 7.737L12.001 3l7.104 4.263l-2.842 1.421L12 6.316z"></svg:path><svg:path fill="#009945" d="m16.737 14.842l2.842 1.42L11.999 21l-7.104-4.263l2.842-1.421L12 17.684z"></svg:path><svg:path fill="#0174BC" d="M15.316 9.63H8.684L12 11.763z"></svg:path><svg:path fill="#024531" d="M12 15.789v-4.027l3.316-2.131z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLm0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1E5EA8"></svg:stop><svg:stop offset="1" stop-color="#163F71"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLm1" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#03783C"></svg:stop><svg:stop offset="1" stop-color="#015429"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
