import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAzitIcon],svg[token-branded-azit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAzit0)" d="m11.874 5.166l-.141-.257L3 19.091h2.553l6.19-9.982l6.731 9.982H21z"></svg:path><svg:path fill="#5550D2" d="m13.435 16.909l7.565-12h-7.069l1.244 2.182h1.963l-7.592 12h11.078l-1.244-2.182z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAzit0" x1="10.92" x2="17.923" y1="7.669" y2="19.374" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3938B8"></svg:stop><svg:stop offset=".52" stop-color="#3937BD"></svg:stop><svg:stop offset="1" stop-color="#5955D9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAzitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
