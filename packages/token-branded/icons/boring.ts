import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBoringIcon],svg[token-branded-boring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBoring0)" d="M12.002 22A10 10 0 1 0 8.877 2.5V12a3.125 3.125 0 1 0 3.125-3.125h-1.875v-1.25h1.875A4.375 4.375 0 1 1 7.627 12V3c-.438.219-.85.462-1.25.731v8.27a5.625 5.625 0 1 0 5.625-5.626h-1.875v-1.25h1.875A6.875 6.875 0 1 1 5.127 12V4.738A10 10 0 0 0 12.002 22m1.875-10a1.875 1.875 0 1 1-3.75 0v-1.875h1.875A1.875 1.875 0 0 1 13.877 12"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBoring0" x1="12" x2="12" y1="2" y2="22" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0071E1"></svg:stop><svg:stop offset="1" stop-color="#015DD2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBoringIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
