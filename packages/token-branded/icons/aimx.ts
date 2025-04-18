import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAimxIcon],svg[token-branded-aimx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAimx0)" d="m10.628 3.915l-.084.064c-1.223 1.274-.457 4.125-1.126 6.37c-.63 2.124-3.867 3.333-5.238 4.633a3.212 3.212 0 1 0 4.408 4.646H8.6a2.4 2.4 0 0 0 .553-.856l.032-.09v-.032a3 3 0 0 0 .129-.399c.618-2.265.232-6.113.76-7.49c.662-1.73 1.859-2.606 2.856-3.565c.689-.656 1.126-1.351 1.023-2.11V5.04a1.93 1.93 0 0 0-1.568-1.698a1.9 1.9 0 0 0-.82.025c-.36.09-.688.283-.939.547m6.511 14.844a1.931 1.931 0 1 0 3.863 0a1.931 1.931 0 0 0-3.863 0"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAimx0" x1="5.642" x2="18.072" y1="6.147" y2="18.795" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#135554"></svg:stop><svg:stop offset="1" stop-color="#00A790"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAimxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
