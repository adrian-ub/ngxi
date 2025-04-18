import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedShxIcon],svg[token-branded-shx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedShx0)" d="M8.35 3L3.31 20.385a.476.476 0 0 0 .447.615h16.49c.308 0 .529-.302.447-.61L15.776 3h-1.51l.245 1.161h-1.347V3H10.84v1.161H9.645L9.819 3H8.344z"></svg:path><svg:path fill="url(#tokenBrandedShx1)" d="m20.236 18.712l-8.222-4.366V3h1.15v1.161h1.353L14.273 3h1.51z"></svg:path><svg:path fill="url(#tokenBrandedShx2)" d="m3.78 18.712l8.222-4.366V3h-.825v1.161H9.493L9.743 3h-1.51z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedShx0" x1="12.002" x2="12.002" y1="3" y2="21.581" gradientUnits="userSpaceOnUse"><svg:stop offset=".64" stop-color="#054DC9"></svg:stop><svg:stop offset="1" stop-color="#0B3299"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedShx1" x1="3.289" x2="5.97" y1="4.596" y2="22.565" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0556D9"></svg:stop><svg:stop offset=".77" stop-color="#0A2993"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedShx2" x1="3.141" x2="12.309" y1="4.057" y2="13.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#025EE3"></svg:stop><svg:stop offset="1" stop-color="#0E2FA2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedShxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
