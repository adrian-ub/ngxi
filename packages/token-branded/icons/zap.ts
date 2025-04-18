import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZapIcon],svg[token-branded-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedZap0)" d="M13.152 9.188V3.71c.027-.135-.024-.456-.444-.653c-.366-.172-.765.083-.885.247c-1.825 2.917-5.233 9.051-5.366 9.36c-.169.389-.054.631.106.81c.119.134.403.214.555.214h3.705l-.79 6.7c.01.155.14.49.564.592c.425.101.717-.205.81-.37l6.057-10.25c.088-.135.27-.494.076-.81a.78.78 0 0 0-.7-.362z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedZap0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#087FFE"></svg:stop><svg:stop offset="1" stop-color="#50C0FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedZapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
