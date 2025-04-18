import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCertificate20Icon],svg[fluent-color-certificate-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCertificate202)" d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4q-.26 0-.5-.063v-1.2c-.614-.55-1-1.348-1-2.237H2z"></svg:path><svg:path fill="url(#fluentColorCertificate203)" fill-opacity=".9" d="M5 6.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m5.5 3.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="url(#fluentColorCertificate200)" d="M3 13.742a4.5 4.5 0 0 0 2.5.758a4.5 4.5 0 0 0 2.5-.758V18a.5.5 0 0 1-.8.4l-1.4-1.05a.5.5 0 0 0-.6 0L3.8 18.4A.5.5 0 0 1 3 18z"></svg:path><svg:path fill="url(#fluentColorCertificate201)" d="M5.5 15a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7"></svg:path><svg:defs><svg:radialgradient id="fluentColorCertificate200" cx="0" cy="0" r="1" gradientTransform="matrix(0 7.5 -11.0369 0 5.5 13)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#163697"></svg:stop><svg:stop offset="1" stop-color="#29C3FF"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCertificate201" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 8.755 -20.434)scale(39.0722 33.4636)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorCertificate202" x1="2.571" x2="10.438" y1="5.25" y2="16.147" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCertificate203" x1="19.5" x2="14.028" y1="17.5" y2="1.005" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9DEAFF"></svg:stop><svg:stop offset="1" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCertificate20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
