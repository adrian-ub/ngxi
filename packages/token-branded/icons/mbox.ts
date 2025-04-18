import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMboxIcon],svg[token-branded-mbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FAB508" d="M12 11L8.5 9.02L12 7l3.5 2.02z"></svg:path><svg:path fill="#B5C7FF" d="M3 12.625L7.5 10v4.375L3 17zm9 0L16.5 10v4.375L12 17z"></svg:path><svg:path fill="url(#tokenBrandedMbox0)" d="M21 12.625L16.5 10v4.375L21 17zm-9 0L7.5 10v4.375L12 17z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMbox0" x1="7.499" x2="20.999" y1="13.5" y2="13.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1B6CF5"></svg:stop><svg:stop offset="1" stop-color="#1B48F5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
