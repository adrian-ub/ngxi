import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedYouIcon],svg[token-branded-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedYou0)" d="M4.226 3h7.07v3.857H7.44v7.418c0 1.093 1.928 3.381 4.5 3.51c2.57.128 4.5-2.295 4.5-3.51V4.928h-1.93v-.642h2.572v9.99c0 1.716-2.224 4.152-5.142 4.152s-5.143-2.572-5.143-4.153v-8.06h3.857V3.642H4.868v10.864c0 1.787 1.929 5.85 7.072 5.85s7.07-3.633 7.07-5.85V3.283h.643v11.224c0 2.487-2.198 6.57-7.713 6.492c-5.516-.077-7.714-4.114-7.714-6.492z"></svg:path><svg:path fill="url(#tokenBrandedYou1)" d="M18.368 3h-5.786v3.857h2.571v7.013c0 .746-1.054 2.68-3.214 2.63c-2.16-.052-3.214-1.75-3.214-2.63V8.245h-.642v5.625c0 1.594 1.716 3.26 3.856 3.272c2.141.013 3.857-1.851 3.857-3.272V6.214h-2.571V3.643h4.5V13.87a5.4 5.4 0 0 1-5.683 5.2c-4.242 0-5.888-3.49-5.888-5.2V4.928h3.214v-.642H5.511v9.584c0 2.379 1.877 5.869 6.531 5.843s6.326-3.696 6.326-5.843z"></svg:path><svg:path fill="url(#tokenBrandedYou2)" d="M8.41 8.43a.437.437 0 1 0 0-.874a.437.437 0 0 0 0 .874"></svg:path><svg:path fill="url(#tokenBrandedYou3)" d="M9.439 5.018a.437.437 0 1 0 0-.874a.437.437 0 0 0 0 .874"></svg:path><svg:path fill="url(#tokenBrandedYou4)" d="M14.433 5.018a.437.437 0 1 0 0-.874a.437.437 0 0 0 0 .874"></svg:path><svg:path fill="url(#tokenBrandedYou5)" d="M19.337 3.874a.437.437 0 1 0 0-.874a.437.437 0 0 0 0 .874"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedYou0" x1="19.03" x2="19.66" y1="3.182" y2="3.718" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A81ED5"></svg:stop><svg:stop offset="1" stop-color="#4300D0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYou1" x1="19.03" x2="19.66" y1="3.182" y2="3.718" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A81ED5"></svg:stop><svg:stop offset="1" stop-color="#4300D0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYou2" x1="19.03" x2="19.66" y1="3.18" y2="3.717" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A81ED5"></svg:stop><svg:stop offset="1" stop-color="#4300D0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYou3" x1="19.029" x2="19.66" y1="3.181" y2="3.718" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A81ED5"></svg:stop><svg:stop offset="1" stop-color="#4300D0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYou4" x1="19.029" x2="19.66" y1="3.181" y2="3.718" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A81ED5"></svg:stop><svg:stop offset="1" stop-color="#4300D0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedYou5" x1="19.029" x2="19.659" y1="3.182" y2="3.718" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A81ED5"></svg:stop><svg:stop offset="1" stop-color="#4300D0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedYouIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
