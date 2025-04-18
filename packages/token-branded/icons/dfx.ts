import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDfxIcon],svg[token-branded-dfx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDfx0)" d="M12 3.006v9.033l-3.538-3.6c-1.142.979-1.49 2.83-1.541 3.6c0 3.066 3.06 5.204 5.079 4.984V21c-7.099-.337-8.96-6.114-9-8.96c0-6.323 5.45-9.18 9-9.034"></svg:path><svg:path fill="url(#tokenBrandedDfx1)" d="M12 20.995V11.96l3.538 3.6c1.142-.979 1.49-2.83 1.541-3.6c0-3.066-3.06-5.203-5.079-4.984V3c7.099.338 8.96 6.115 9 8.96c0 6.323-5.45 9.18-9 9.035"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDfx0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop offset=".32" stop-color="#00E8F2"></svg:stop><svg:stop offset="1" stop-color="#3F28F7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDfx1" x1="16.5" x2="16.5" y1="21" y2="3" gradientUnits="userSpaceOnUse"><svg:stop offset=".46" stop-color="#EA00D1"></svg:stop><svg:stop offset="1" stop-color="#6401F2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDfxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
