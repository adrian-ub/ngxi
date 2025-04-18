import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedQrdoIcon],svg[token-branded-qrdo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedQrdo0)" d="M12 5.81a6.188 6.188 0 0 0-6.064 7.424a1.406 1.406 0 1 1-2.756.563a9 9 0 1 1 17.82-1.8h-2.813A6.19 6.19 0 0 0 12 5.809"></svg:path><svg:path fill="url(#tokenBrandedQrdo1)" d="M19.2 9.186a1.407 1.407 0 0 1 1.643 1.125q.157.831.157 1.677v.005c0 2.295-.86 4.388-2.273 5.98l.546.658a1.407 1.407 0 0 1-2.171 1.788l-.546-.663a9 9 0 0 1-12.342-3.248A9 9 0 0 1 3 11.993h2.813a6.187 6.187 0 0 0 8.92 5.552l-.82-.996a1.405 1.405 0 0 1 .19-1.98a1.407 1.407 0 0 1 1.98.192l.833 1.007a6.16 6.16 0 0 0 1.17-4.933a1.406 1.406 0 0 1 1.12-1.643z"></svg:path><svg:path fill="#FFE000" d="M5.83 12.47a7 7 0 0 0 .106.765a1.406 1.406 0 0 1-2.756.562a9 9 0 0 1-.18-1.8h2.813"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedQrdo0" x1="19.031" x2="3.736" y1="11.485" y2="15.06" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2DDE41"></svg:stop><svg:stop offset="1" stop-color="#FFE000"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedQrdo1" x1="26.062" x2="6.373" y1="14.578" y2="14.763" gradientUnits="userSpaceOnUse"><svg:stop offset=".36" stop-color="#FF26EB"></svg:stop><svg:stop offset=".66" stop-color="#137FF9"></svg:stop><svg:stop offset="1" stop-color="#27B3F9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedQrdoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
