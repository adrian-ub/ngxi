import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPolaIcon],svg[token-branded-pola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1B7EFF" d="m14.118 20.47l-.953-1.587l2.276-4.236L12 8.824h1.77l3.524 5.823z"></svg:path><svg:path fill="#0B61CE" d="M4.853 13.058H3l4.451 7.405l6.667.007l-.937-1.588H8.294z"></svg:path><svg:path fill="#0D64CE" d="m9.882 3.53l.953 1.588l-2.277 4.235L12 15.176h-1.77L6.706 9.353z"></svg:path><svg:path fill="#1B7FF6" d="M19.147 10.941H21l-4.451-7.405l-6.667-.007l.937 1.589h4.887z"></svg:path></svg:g>`,
})
export class TokenBrandedPolaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
