import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFlsIcon],svg[token-branded-fls-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedFls0)" d="M6.351 15.937c3.306.837 4.02 2.44 3.959 3.137l-3.96 1.924h-.787a2.55 2.55 0 0 1-2.559-2.531c0-1.4 1.147-2.53 2.559-2.53zm3.115.185l-6.405-3.16c-.45-2.666 1.67-3.25 3.2-3.205c.4.005.787.14 1.142.32c1.59.81 4.386 2.221 6.061 3.048c1.89.928 2.025 2.384 1.856 2.997l-4.206 2.064a3.7 3.7 0 0 0-1.648-2.064"></svg:path><svg:path fill="url(#tokenBrandedFls1)" d="M14.73 12.478L3.005 6.658c0-2.925 2.16-3.656 3.324-3.656c.933 0 1.625.231 1.855.35c2.683 1.304 8.435 4.104 9.97 4.869C20.072 9.177 21 9.779 21 11.37c0 1.462-.619 2.21-1.198 2.508c-.894.455-2.378 1.192-3.12 1.496a3.68 3.68 0 0 0-1.952-2.896"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedFls0" x1="21" x2="3" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5B8AFF"></svg:stop><svg:stop offset=".99" stop-color="#3F58FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedFls1" x1="21" x2="3" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5B8AFF"></svg:stop><svg:stop offset=".99" stop-color="#3F58FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedFlsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
