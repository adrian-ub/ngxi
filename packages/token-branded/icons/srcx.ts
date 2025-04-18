import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSrcxIcon],svg[token-branded-srcx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSrcx0)" d="M8.444 3.126a.59.59 0 0 1 .849.14l2.895 4.172l2.513-4.149a.59.59 0 0 1 .849-.169a.67.67 0 0 1 .157.9l-2.754 4.514l.416.608l3.778-5.864A.59.59 0 0 1 18 3.132a.67.67 0 0 1 .14.9l-4.013 6.206l.674.978l5.088-7.933a.59.59 0 0 1 .843-.157a.66.66 0 0 1 .152.9l-5.318 8.287l5.313 7.657a.67.67 0 0 1-.13.9a.593.593 0 0 1-.854-.141L8.309 4.026a.663.663 0 0 1 .135-.9m-5.19 0a.59.59 0 0 1 .855.135l8.58 12.2l3.3 4.497a.66.66 0 0 1-.107.9a.586.586 0 0 1-.855-.113l-2.81-3.822l-2.615 3.806a.6.6 0 0 1-.855.14a.663.663 0 0 1-.135-.9l2.828-4.109l-.388-.545l-4.025 5.436a.586.586 0 0 1-.855.113a.663.663 0 0 1-.106-.9l4.233-5.723l-.596-.843l-5.302 7.348a.59.59 0 0 1-.854.123a.663.663 0 0 1-.113-.9l5.51-7.645L3.12 4.03a.67.67 0 0 1 .129-.9zm2.435 0a.59.59 0 0 1 .854.135l11.891 16.703a.665.665 0 0 1-.118.9a.59.59 0 0 1-.854-.13L5.57 4.031a.665.665 0 0 1 .118-.9zm7.438 1.844a.844.844 0 1 1-1.687 0a.844.844 0 0 1 1.687 0m-.843 14.899a.844.844 0 1 0-.001-1.689a.844.844 0 0 0 0 1.689"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSrcx0" x1="12.002" x2="12.002" y1="3.002" y2="20.993" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5E189B"></svg:stop><svg:stop offset=".27" stop-color="#D11EF8"></svg:stop><svg:stop offset=".46" stop-color="#6B78FB"></svg:stop><svg:stop offset="1" stop-color="#31A8FA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSrcxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
