import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAbyssIcon],svg[token-branded-abyss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAbyss0)" d="M12.01 8.685c-1.35 0-2.379.208-2.379.208v2.16h4.737V8.894c.022 0-1.007-.21-2.358-.21"></svg:path><svg:path fill="url(#tokenBrandedAbyss1)" d="M12 3C8.54 3 4.42 4.778 4.42 4.778V15.6L12 21l7.579-5.378V4.755c.022 0-4.1-1.755-7.58-1.755m4.263 11.436l-1.895 1.383v-2.872H9.631v2.871l-1.894-1.382V7.26s2.5-.57 4.285-.57c1.784-.001 4.241.57 4.241.57z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAbyss0" x1="6.496" x2="18.731" y1="6.106" y2="16.484" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A025F3"></svg:stop><svg:stop offset="1" stop-color="#4212A0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAbyss1" x1="6.496" x2="18.731" y1="6.105" y2="16.483" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A025F3"></svg:stop><svg:stop offset="1" stop-color="#4212A0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAbyssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
