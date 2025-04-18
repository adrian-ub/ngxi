import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPacIcon],svg[token-branded-pac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPac0)" d="M18.631 12L12 3l-6.632 9l5.685 7.674v-7.712l-.858 3.629l-2.724-3.586l4.534-6.097L16.533 12l-2.728 3.586L12 8.376V21z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPac0" x1="5.368" x2="22.56" y1="3" y2="15.668" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00DDF8"></svg:stop><svg:stop offset="1" stop-color="#0290A4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
