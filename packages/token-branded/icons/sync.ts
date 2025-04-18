import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSyncIcon],svg[token-branded-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSync0)" d="m16.106 6.527l.956-2.408C16.5 3.75 14.819 3 12.614 3C9.857 3 7.517 4.575 7.517 6.937A3.23 3.23 0 0 0 8.36 9.25l-.04.04c-.478.467-1.383 1.355-1.383 2.846c0 1.536.91 2.84 3.847 3.487c2.34.54 2.902.996 2.902 1.592s-.961 1.238-2.233 1.238c-1.265 0-2.89-.754-3.493-1.238l-1.024 2.503c.62.428 2.397 1.283 4.517 1.283c2.644 0 5.03-1.238 5.03-4.005a3.66 3.66 0 0 0-.935-2.295a3.65 3.65 0 0 0 1.514-2.886c0-1.991-1.913-3.02-4.095-3.527c-2.183-.506-2.655-.91-2.655-1.552c0-.641.877-1.17 2.3-1.17s2.531.394 3.488.962zm-5.265 3.786l1.913.511c.506.13 1.496.591 1.496 1.373s-.714 1.322-1.069 1.49l-1.788-.438c-.552-.18-1.643-.715-1.643-1.418c0-.709.731-1.305 1.091-1.518"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSync0" x1="15.254" x2="4.369" y1="5.089" y2="12.787" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2ABECD"></svg:stop><svg:stop offset="1" stop-color="#4F69D4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
