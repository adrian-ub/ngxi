import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAtdIcon],svg[token-branded-atd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAtd0)" d="M12.297 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="#610467" d="M6.095 18.596c-.708 0-1.284.468-1.284 1.152a1.26 1.26 0 0 0 1.284 1.248h11.818a1.26 1.26 0 0 0 1.284-1.248c0-.684-.576-1.152-1.284-1.152z"></svg:path><svg:path fill="#610467" d="M5.37 20.8a1.26 1.26 0 0 0 1.734-.366l3.491-5.321a1.23 1.23 0 0 0-.366-1.716a1.26 1.26 0 0 0-1.733.366l-3.492 5.32A1.23 1.23 0 0 0 5.37 20.8"></svg:path><svg:path fill="url(#tokenBrandedAtd1)" d="M8.932 7.428a1.22 1.22 0 0 0-.3 1.727L16.9 20.481c.408.552 1.2.684 1.77.288a1.22 1.22 0 0 0 .293-1.728L10.696 7.716a1.29 1.29 0 0 0-1.764-.288"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAtd0" x1="12.297" x2="12.297" y1="3" y2="5.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E4396A"></svg:stop><svg:stop offset="1" stop-color="#300F39"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAtd1" x1="14.697" x2="13.498" y1="13.498" y2="14.398" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D12D6D"></svg:stop><svg:stop offset="1" stop-color="#610467"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAtdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
