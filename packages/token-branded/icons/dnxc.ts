import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDnxcIcon],svg[token-branded-dnxc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E97E00" d="M3 21h13.2v-1.2h1.2v-1.2h1.2v-1.2h1.2v-1.2H21V7.8h-1.2V6.6h-1.2V5.4h-1.2V4.2h-1.2V3H7.8v1.2H6.6v1.2H5.4v1.2H4.2v1.2H3z"></svg:path><svg:path fill="#FC0" d="M4.2 19.799H15v-1.2h1.2v-1.2h1.2v-1.2h1.2v-1.2h1.2v-6h-1.2v-1.2h-1.2v-1.2h-1.2v-1.2H15v-1.2H9v1.2H7.8v1.2H6.6v1.2H5.4v1.2H4.2z"></svg:path><svg:path fill="url(#tokenBrandedDnxc0)" d="M3 21v-4.16h1.188V14.4H4.8v-1.2H6v-2.4h1.2v-3h1.2V6.6h1.2V5.4h4.2v1.2H15v1.2h2.4V9h1.2v3h-3v-1.2h-2.4V12h1.2v1.2h1.2v1.2h1.2v1.2h-3.6v-1.2H12v-1.2h-1.2v1.2H9.6v1.8H12v1.2h1.2v1.2h-2.4v-1.2H8.4V21z"></svg:path><svg:path fill="#6C6C6C" d="M16.2 9.599v1.2h1.2v-1.2z"></svg:path><svg:path fill="#fff" d="M12 7.2v1.2h1.2V7.2z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDnxc0" x1="6.351" x2="24.905" y1="6.122" y2="27.431" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1A1E21"></svg:stop><svg:stop offset="1" stop-color="#06060A"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDnxcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
