import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSpxIcon],svg[token-branded-spx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSpx0)" fill-rule="evenodd" d="M12 20.47a8.47 8.47 0 1 0 0-16.94a8.47 8.47 0 0 0 0 16.94m0 .53a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedSpx1)" d="m10.872 12.18l.635 3.494a4.2 4.2 0 0 1-2.382-1.096c-.424-.386-1.049-.545-1.536-.248c-.518.307-.677.99-.275 1.429a6.34 6.34 0 0 0 4.58 2.065l.127.714a1.06 1.06 0 0 0 1.613.708a1.06 1.06 0 0 0 .473-1.078l-.117-.662a6.35 6.35 0 0 0 4.299-6.962c-.138-.963-1.123-1.477-2.086-1.323c-2.769.444-5.538.847-8.317 1.27a4.236 4.236 0 0 1 6.31-2.647c.408.25.916.318 1.33.09c.635-.344.783-1.19.195-1.614a6.353 6.353 0 0 0-10.075 5.15c0 .848.821 1.398 1.663 1.271c1.18-.185 2.34-.375 3.563-.56m2.096-.317l3.267-.487v.095a4.24 4.24 0 0 1-2.631 3.917l-.636-3.52z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSpx0" x1="3.265" x2="21" y1="12.794" y2="13.323" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FD00FF"></svg:stop><svg:stop offset="1" stop-color="#0BF2FE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSpx1" x1="7.5" x2="16.765" y1="8.029" y2="14.647" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0BF1FF"></svg:stop><svg:stop offset="1" stop-color="#F903FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSpxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
