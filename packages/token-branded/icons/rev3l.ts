import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRev3lIcon],svg[token-branded-rev3l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRev3l0)" d="M15.937 3.563L14.25 6.374H8.248c-.872 0-2.435.664-2.435 2.812c0 2.15 1.653 2.684 2.53 2.813h2.813l-4.219 8.438H3.281l3.094-6.188C5.25 13.867 3 12.872 3 9.187s3.375-5.624 5.062-5.624zM8.062 20.438l1.407-2.813h6.283c.872 0 2.435-.664 2.435-2.812c0-2.15-1.653-2.684-2.53-2.813h-3.094l4.5-8.437h3.656l-3.094 6.13c1.125.395 3.375 1.435 3.375 5.12s-2.813 5.624-5.063 5.624z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRev3l0" x1="8.304" x2="15.388" y1="4.467" y2="20.044" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#242A3F"></svg:stop><svg:stop offset=".38" stop-color="#321B65"></svg:stop><svg:stop offset=".73" stop-color="#622065"></svg:stop><svg:stop offset="1" stop-color="#C56058"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRev3lIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
