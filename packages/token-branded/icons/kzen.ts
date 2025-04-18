import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKzenIcon],svg[token-branded-kzen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKzen0)" d="M12 20.47a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94"></svg:path><svg:path fill="url(#tokenBrandedKzen1)" d="M20.47 12a8.47 8.47 0 1 0-16.94 0a8.47 8.47 0 0 0 16.94 0"></svg:path><svg:path fill="#181B1E" d="M10.411 6.706H12v10.059h-1.588zm6.771-2.647l-.937-.985L16.187 3a14.54 14.54 0 0 0-3.129 8.958c0 3.43 1.191 6.58 3.177 9.042l1.058-1.048a13.04 13.04 0 0 1-2.694-7.994c0-2.954.958-5.729 2.583-7.9"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKzen0" x1="16.939" x2="6.927" y1="4.125" y2="19.714" gradientUnits="userSpaceOnUse"><svg:stop offset=".16" stop-color="#FFA3A3"></svg:stop><svg:stop offset=".59" stop-color="#C50000"></svg:stop><svg:stop offset="1" stop-color="#C50101"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKzen1" x1="14.647" x2="12.33" y1="3.562" y2="7.379" gradientUnits="userSpaceOnUse"><svg:stop offset=".07" stop-color="#FF5353"></svg:stop><svg:stop offset="1" stop-color="#C50101" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKzenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
