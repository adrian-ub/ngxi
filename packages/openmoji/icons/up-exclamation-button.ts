import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiUpExclamationButtonIcon],svg[openmoji-up-exclamation-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M59.035 60h-46.07a.97.97 0 0 1-.965-.965v-46.07a.97.97 0 0 1 .965-.965h46.07a.97.97 0 0 1 .965.965v46.07a.97.97 0 0 1-.965.965Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30.426 30.015v6.75a3.75 3.75 0 0 1-3.75 3.75h0a3.75 3.75 0 0 1-3.75-3.75v-6.75M35.648 40.47v-10.5h4.003a2.615 2.615 0 0 1 2.616 2.615h0A2.615 2.615 0 0 1 39.65 35.2h-4.003m14.222-5.23v6.486"></svg:path><svg:circle cx="49.869" cy="40.47" r="1.5"></svg:circle>`,
})
export class OpenmojiUpExclamationButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
