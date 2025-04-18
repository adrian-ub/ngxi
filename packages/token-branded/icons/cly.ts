import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedClyIcon],svg[token-branded-cly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCly0)" d="M12 3.194a8.787 8.787 0 1 0 0 17.568a8.79 8.79 0 0 0 8.31-5.372A8.787 8.787 0 0 0 12 3.194m0 13.47c-2.59 0-4.663-2.03-4.663-4.663c0-2.59 2.02-4.662 4.663-4.662c2.59 0 4.663 2.03 4.663 4.662A4.643 4.643 0 0 1 12 16.664"></svg:path><svg:path fill="url(#tokenBrandedCly1)" d="M20.808 11.98v-.135a8.72 8.72 0 0 0-2.057-5.486a8.6 8.6 0 0 0-2.057 5.621a8.6 8.6 0 0 0 2.057 5.616a8.82 8.82 0 0 0 2.057-5.481z"></svg:path><svg:path fill="url(#tokenBrandedCly2)" d="M5.25 6.359a8.73 8.73 0 0 0-2.058 5.486v.27a8.73 8.73 0 0 0 2.057 5.481a8.6 8.6 0 0 0 2.057-5.616c0-2.14-.803-4.103-2.057-5.621"></svg:path><svg:path fill="url(#tokenBrandedCly3)" d="M17.633 5.246a8.78 8.78 0 0 0-5.497-2.051h-.27A8.78 8.78 0 0 0 6.37 5.246A8.65 8.65 0 0 0 12 7.298a9.15 9.15 0 0 0 5.632-2.052"></svg:path><svg:path fill="url(#tokenBrandedCly4)" d="M6.37 18.757A8.9 8.9 0 0 0 12 20.81a8.63 8.63 0 0 0 5.632-2.052A8.9 8.9 0 0 0 12 16.705a8.63 8.63 0 0 0-5.631 2.052"></svg:path><svg:path fill="url(#tokenBrandedCly5)" d="M12.002 14.074a2.072 2.072 0 1 0 0-4.145a2.072 2.072 0 0 0 0 4.145"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCly0" x1="8" x2="15.751" y1="-2.282" y2="25.497" gradientUnits="userSpaceOnUse"><svg:stop offset=".14" stop-color="#FF78F1"></svg:stop><svg:stop offset=".3" stop-color="#C199F2"></svg:stop><svg:stop offset=".49" stop-color="#7DBDF4"></svg:stop><svg:stop offset=".66" stop-color="#47D9F5"></svg:stop><svg:stop offset=".81" stop-color="#20EEF6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCly1" x1="18.767" x2="18.767" y1="6.323" y2="17.617" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8172E8"></svg:stop><svg:stop offset="1" stop-color="#00C4EF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCly2" x1="5.239" x2="5.239" y1="6.38" y2="17.13" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8172E8"></svg:stop><svg:stop offset="1" stop-color="#00C4EF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCly3" x1="17.415" x2="8.742" y1="5.236" y2="5.236" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#008DEB"></svg:stop><svg:stop offset="1" stop-color="#956DE7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCly4" x1="6.37" x2="17.633" y1="18.736" y2="18.736" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#009BEC"></svg:stop><svg:stop offset="1" stop-color="#00CAEF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCly5" x1="12.002" x2="12.002" y1="16.602" y2="10.701" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF78F1"></svg:stop><svg:stop offset="1" stop-color="#00FFF7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedClyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
