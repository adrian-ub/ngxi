import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAuroraIcon],svg[token-branded-aurora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAurora0)" d="M13.88 5.676a2.1 2.1 0 0 0-3.768 0L4.424 16.46a2.1 2.1 0 0 0 1.884 3.04h11.377a2.1 2.1 0 0 0 1.792-.995a2.1 2.1 0 0 0 .092-2.047zm-4.842-.54a3.3 3.3 0 0 1 5.916 0L20.65 15.92a3.3 3.3 0 0 1-2.965 4.782H6.309a3.312 3.312 0 0 1-2.964-4.782L9.038 5.142z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAurora0" x1="17.59" x2="6.929" y1="5.195" y2="19.354" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#95E141"></svg:stop><svg:stop offset=".59" stop-color="#63B836"></svg:stop><svg:stop offset="1" stop-color="#409C2D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAuroraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
