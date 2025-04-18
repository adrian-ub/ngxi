import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEdenIcon],svg[token-branded-eden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEden0)" fill-rule="evenodd" d="M16.68 9.63L13 6.075v7.115zm-7.54 7.535l1.86-1.8v-.07L7.04 11.47v3.67zm1.09 1.055l.77-.745V21h2v-3.5l1.55 1.5v-.01l.3.29l3.635-3.515h.015V9.25h-.03l-5.38-5.2L12 3L5.53 9.25H5.5v6.515h.015L8.05 18.22l1.085 1.055h.01l1.09-1.05zM13 15.4l1.85 1.785L17 15.1v-3.67l-4 3.865zM7.32 9.63L11 13.19V6.075z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEden0" x1="6.915" x2="17.06" y1="17.225" y2="9.145" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#10CB88"></svg:stop><svg:stop offset="1" stop-color="#BDF418"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEdenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
