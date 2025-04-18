import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUshIcon],svg[token-branded-ush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedUsh0)" d="M11.93 3L4.06 7.5L12 12l7.942-4.5z"></svg:path><svg:path fill="url(#tokenBrandedUsh1)" d="M4.059 16.648V7.5l7.94 4.5v9z"></svg:path><svg:path fill="url(#tokenBrandedUsh2)" d="M19.941 16.648V7.5L12 12v9z"></svg:path><svg:path fill="url(#tokenBrandedUsh3)" d="m12 7.727l3.706 2.118v4.235L12 16.198L8.294 14.08V9.845z"></svg:path><svg:path fill="url(#tokenBrandedUsh4)" d="M8.294 9.898L12 12v4.198L8.294 14.08z"></svg:path><svg:path fill="url(#tokenBrandedUsh5)" d="M15.706 9.898v-.053L12 7.727L8.294 9.845v.053L12 11.999z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedUsh0" x1="14.853" x2="6.249" y1="6.653" y2="11.246" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#006ACA"></svg:stop><svg:stop offset=".66" stop-color="#00DFFA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUsh1" x1="4.63" x2="11.563" y1="4.729" y2="23.314" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0059CB"></svg:stop><svg:stop offset=".4" stop-color="#00C3E4"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUsh2" x1="18.882" x2="10.126" y1="5.012" y2="13.371" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0062C8"></svg:stop><svg:stop offset="1" stop-color="#00E7EF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUsh3" x1="15.256" x2="12.158" y1="13.698" y2="21.063" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00E0FF"></svg:stop><svg:stop offset="1" stop-color="#00C9FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUsh4" x1="6.895" x2="11.289" y1="6.176" y2="13.723" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00C3FF"></svg:stop><svg:stop offset="1" stop-color="#00F1FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUsh5" x1="10.301" x2="11.27" y1="8.871" y2="10.041" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00C9FF"></svg:stop><svg:stop offset="1" stop-color="#00E8FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedUshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
