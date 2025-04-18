import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRfoxIcon],svg[token-branded-rfox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRfox0)" fill-rule="evenodd" d="M4.452 10.38V3L8.11 6.774zm10.243-2.735H9.318l2.74 11.473zM8.55 7.68L11.796 21l-6.779-9.86zm6.9 0L12.204 21l6.779-9.86zm4.099 2.7V3L15.89 6.774z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRfox0" x1="4.573" x2="19.264" y1="10.769" y2="10.769" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#AF0607"></svg:stop><svg:stop offset=".495" stop-color="#ED1C24"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRfoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
