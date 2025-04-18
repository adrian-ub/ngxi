import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCdaiIcon],svg[token-branded-cdai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCdai0)" d="M19.677 5.065A9.9 9.9 0 0 0 13.588 3c-5.114 0-9.264 4.03-9.264 9s4.15 9 9.264 9a9.43 9.43 0 0 0 6.089-2.202L18.67 17.58a7.86 7.86 0 0 1-5.083 1.832c-4.235 0-7.676-3.32-7.676-7.412s3.441-7.412 7.676-7.412c1.864 0 3.749.636 5.083 1.705z"></svg:path><svg:path fill="url(#tokenBrandedCdai1)" fill-rule="evenodd" d="M13.588 8.295h-2.912v2.647H9.618v.53h1.058v1.058H9.618v.53h1.058v2.117h2.912a3.44 3.44 0 0 0 3.177-2.117h.794v-.53h-.62a3.5 3.5 0 0 0 .08-1.059h.54v-.53h-.62a3.44 3.44 0 0 0-3.35-2.646m2.806 4.235a2.9 2.9 0 0 0 .095-1.059h-5.283v1.059zm-5.188.53v1.588h2.382a2.91 2.91 0 0 0 2.594-1.588zm0-2.118h5.188a2.91 2.91 0 0 0-2.806-2.118h-2.382z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCdai0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#27D3A2"></svg:stop><svg:stop offset="1" stop-color="#9388FD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCdai1" x1="13.742" x2="13.742" y1="8.295" y2="15.177" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#304250"></svg:stop><svg:stop offset="1" stop-color="#5D6E7D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCdaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
