import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPalIcon],svg[token-branded-pal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPal0)" d="M9.368 12.947a.42.42 0 0 0-.18.314c-.003.737-.001 1.468 0 2.202c0 .485-.32.684-.722.443c-1.354-.813-2.19-1.466-2.974-1.942a.57.57 0 0 1-.241-.44L5.25 5.738c0-.161.11-.36.243-.44L9.184 3.06a.52.52 0 0 1 .49 0l3.758 2.237c.134.081.256.28.256.441v4.478c0 .162-.122.36-.256.441c-1.254.76-2.81 1.529-4.064 2.29m5.445-2.191c.002-.737 0-1.468 0-2.202c-.001-.485.34-.685.743-.443c1.354.813 2.168 1.449 2.952 1.925a.57.57 0 0 1 .242.44v7.785a.57.57 0 0 1-.243.44l-3.691 2.238a.52.52 0 0 1-.49 0l-3.75-2.237c-.133-.081-.263-.28-.263-.441v-4.478c0-.161.13-.36.264-.44c1.254-.76 2.823-1.513 4.077-2.273c.095-.057.159-.199.16-.314"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPal0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00EDD8"></svg:stop><svg:stop offset="1" stop-color="#00D7AF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
