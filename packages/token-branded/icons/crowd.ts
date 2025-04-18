import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCrowdIcon],svg[token-branded-crowd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCrowd0)" d="M11.201 13.247c-.509-.153-1.049.203-1.432.576c-.64.622-1.77.878-2.729.878a2.703 2.703 0 1 1 2.387-3.962c.195-.44.527-.807.946-1.045a4.048 4.048 0 1 0-3.333 6.358c1.932 0 4.098-.891 4.503-2.701z"></svg:path><svg:path fill="url(#tokenBrandedCrowd1)" d="m12.94 13.216l.405.135l.365.072a1.26 1.26 0 0 0-.766-.207zm1.333.657c-.262.207-.752.36-1.441.374c.801 1.207 2.535 1.806 4.115 1.806a4.053 4.053 0 1 0 0-8.106c-1.382 0-3.098 1.194-3.827 2.252c-.225.675.225 1.126.45 1.35c.45-.855 2.342-2.25 3.377-2.25a2.702 2.702 0 1 1 0 5.403c-.932 0-2.026-.243-2.674-.829"></svg:path><svg:path fill="#0B9ED9" d="M10.643 12a.9.9 0 1 0 0-1.801a.9.9 0 0 0 0 1.801m2.701 1.802a.9.9 0 1 0 0-1.801a.9.9 0 0 0 0 1.801"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCrowd0" x1="4.871" x2="12.633" y1="10.417" y2="19.674" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1CD875"></svg:stop><svg:stop offset="1" stop-color="#17C693"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCrowd1" x1="6.691" x2="10.853" y1="9.974" y2="18.299" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#16C399"></svg:stop><svg:stop offset="1" stop-color="#0FADBE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCrowdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
