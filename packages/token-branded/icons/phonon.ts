import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPhononIcon],svg[token-branded-phonon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#4D4D4D" d="m16.67 9.295l.83 3.625l1.285-2.625l-.784-3.225zm-11.424 4.32l.755 3.8L7.266 14.5L6.5 11.07l-1.255 2.55zM9 18.43l.88-.075l.62-2.71V8.07L9 11.395zm4.5-2l.88-.65l.62-2.7V5.57l-1.5 3.25z"></svg:path><svg:path fill="url(#tokenBrandedPhonon0)" d="M9 18.43c1.15.285 2.34-.34 2.65-1.4L15 5.57c-1.15-.285-2.34.34-2.65 1.4zm-.615-2.39A1.95 1.95 0 0 1 6 17.43l2.115-7.97A1.95 1.95 0 0 1 10.5 8.07zm7.5-1a1.947 1.947 0 0 1-2.385 1.39l2.115-7.97A1.95 1.95 0 0 1 18 7.07zm4.1-3.45c-.285 1.015-1.4 1.615-2.485 1.345l1.01-3.525c.29-1.015 1.405-1.615 2.49-1.345l-1.01 3.525zM3 15.935c1.085.27 2.2-.33 2.49-1.345l1.01-3.525c-1.085-.27-2.2.33-2.49 1.345z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPhonon0" x1="2.99" x2="21" y1="8.19" y2="8.19" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F8A8FD"></svg:stop><svg:stop offset="1" stop-color="#00E2B0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPhononIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
