import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZzIcon],svg[token-branded-zz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedZz0)" d="M8.29 3.1a.79.79 0 0 0-.914.105l-.965.87c-.425.385-.35 1.1.16 1.37l7.79 4.2l-5.45 4a.63.63 0 0 0 .08 1.07l8.99 4.545l-1.25.905L5.996 14.14l5.065-3.6a.636.636 0 0 0-.035-1.055l-3.11-1.91l-.46.69l2.885 1.77l-5.08 3.615c-.37.265-.34.84.055 1.065L16.34 20.9c.27.15.6.13.85-.05l1.255-.91a.85.85 0 0 0-.105-1.43l-8.69-4.39l5.45-3.99c.37-.27.33-.85-.07-1.065L6.946 4.7l.96-.87l10.105 5.6l-5.475 4.005A.64.64 0 0 0 12.6 14.5l4.975 2.76l.435-.765l-4.74-2.575l5.475-4.005a.64.64 0 0 0-.065-1.065zM7.03 8l.46-.685l-.92-.565l-.414.715l.875.54z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedZz0" x1="5.501" x2="17.251" y1="5.25" y2="20.25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#02EEE4"></svg:stop><svg:stop offset="1" stop-color="#07A9FC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedZzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
