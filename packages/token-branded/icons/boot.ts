import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBootIcon],svg[token-branded-boot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A200" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="url(#tokenBrandedBoot0)" fill-opacity=".61" d="M12 20.75a8.75 8.75 0 1 0 0-17.5a8.75 8.75 0 0 0 0 17.5"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBoot0" x1="12" x2="12" y1="3.25" y2="20.75" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7DFF7D"></svg:stop><svg:stop offset=".56" stop-color="#00A200"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
