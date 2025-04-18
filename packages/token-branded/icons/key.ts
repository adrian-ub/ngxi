import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKeyIcon],svg[token-branded-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKey0)" d="M11.5 16.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="url(#tokenBrandedKey1)" fill-rule="evenodd" d="M12 3L4 7.485v8.99L12 21l8-4.525v-8.99zm2.045 3.5H11.54c-.19.005-.53.14-.54.615v6.448a2 2 0 1 0 1 0V9.5h1.58c.15 0 .42-.17.42-.5c0-.325-.265-.5-.42-.5H12v-1h2.05c.175 0 .45-.195.45-.5a.48.48 0 0 0-.455-.5" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKey0" x1="12.001" x2="12.001" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4AB0E1"></svg:stop><svg:stop offset="1" stop-color="#58B9CF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKey1" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4AB0E1"></svg:stop><svg:stop offset="1" stop-color="#58B9CF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
