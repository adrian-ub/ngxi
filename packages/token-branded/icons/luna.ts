import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLunaIcon],svg[token-branded-luna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F2E373" d="M11.5 21a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path fill="url(#tokenBrandedLuna0)" d="M14 3c-.67 1-1.964 1.695-2.86 2.005a8 8 0 0 0-7.54 9.26c.72 2.2 2.216 3.7 4.276 3.815c2.15.125 4.244-.645 5.225-3.01c.79-1.9 2.18-2.455 2.774-2.57H20.5l-1.125-.8c-1.665-1.425-4.24-1.265-4.92-.675a3.7 3.7 0 0 1-2.09.88c-2.554 0-2.78-1.935-2.78-2.39v-.05c-.004-.52-.014-2.015 2.386-2.82a3.1 3.1 0 0 0 1.77-1.33h-.006c.51-.79.4-1.9.266-2.315"></svg:path><svg:path fill="url(#tokenBrandedLuna1)" d="M18.04 17.61a8 8 0 0 1-14.41-3.184c.485 1.42 1.925 3.704 4.61 3.654c2.915-.05 4.36-1.87 4.75-2.88c.395-1 1.375-2.34 2.875-2.7c-.615.38-1.735 1.425-1.62 2.7c.135 1.555 1.39 2.585 3.795 2.41"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLuna0" x1="7.101" x2="16.812" y1="5.898" y2="14.155" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F5C859"></svg:stop><svg:stop offset="1" stop-color="#DE3633"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedLuna1" x1="8.69" x2="11.525" y1="16.09" y2="21.045" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F3BE56"></svg:stop><svg:stop offset="1" stop-color="#E04437"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLunaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
