import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPortxIcon],svg[token-branded-portx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2FF6D3" fill-rule="evenodd" d="M5.406 17.85c.798 1.5 1.698 2.04 2.394 2.04s1.596-.54 2.394-2.04c.768-1.44 1.278-3.504 1.278-5.85c0-2.34-.51-4.41-1.278-5.85c-.798-1.5-1.698-2.04-2.394-2.04s-1.596.54-2.394 2.04C4.638 7.59 4.128 9.654 4.128 12c0 2.34.51 4.41 1.278 5.85M3 12c0 4.968 2.148 9 4.8 9s4.8-4.032 4.8-9s-2.148-9-4.8-9S3 7.032 3 12" clip-rule="evenodd"></svg:path><svg:path fill="#2FF6D3" fill-rule="evenodd" d="M9.606 17.85c.798 1.5 1.698 2.04 2.394 2.04s1.596-.54 2.394-2.04c.768-1.44 1.278-3.504 1.278-5.85c0-2.34-.51-4.41-1.278-5.85c-.798-1.5-1.698-2.04-2.394-2.04s-1.596.54-2.394 2.04C8.838 7.59 8.328 9.654 8.328 12c0 2.34.51 4.41 1.278 5.85M7.2 12c0 4.968 2.148 9 4.8 9s4.8-4.032 4.8-9s-2.148-9-4.8-9s-4.8 4.032-4.8 9" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedPortx0)" d="M12.6 16.2a4.2 4.2 0 1 1 0-8.401a4.2 4.2 0 0 1 0 8.4"></svg:path><svg:path fill="#2FF6D3" fill-rule="evenodd" d="M13.806 17.85c.798 1.5 1.698 2.04 2.394 2.04s1.596-.54 2.394-2.04c.768-1.44 1.278-3.504 1.278-5.85c0-2.34-.51-4.41-1.278-5.85c-.798-1.5-1.698-2.04-2.394-2.04s-1.596.54-2.394 2.04c-.768 1.44-1.278 3.504-1.278 5.85c0 2.34.51 4.41 1.278 5.85M11.4 12c0 4.968 2.148 9 4.8 9s4.8-4.032 4.8-9s-2.148-9-4.8-9s-4.8 4.032-4.8 9" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPortx0" x1="12.244" x2="3" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPortxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
