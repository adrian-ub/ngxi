import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEjsIcon],svg[token-branded-ejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEjs0)" d="m16.064 7.93l-4.385 1.2l.425.43l-2.585 2.586a.701.701 0 1 1-.995-.99L13.49 6.19a6 6 0 1 0 4.32 4.32l-4.966 4.965a.702.702 0 0 1-.99-.995l2.585-2.585l.47.465z"></svg:path><svg:path fill="#EA3D72" d="m6.75 14.91l2.77-2.765a.701.701 0 1 1-.996-.99l-2.34 2.335c.13.49.315.97.565 1.42m5.1-.425L9.09 17.25c.45.25.93.435 1.42.564l2.424-2.43l-.09.09a.703.703 0 0 1-.995-.99"></svg:path><svg:path fill="#730D2B" d="M12.174 14.16L9.09 17.25l.305.155l2.27-2.27a.7.7 0 0 1 .19-.65zm-5.885-.31l2.05-2.04a.71.71 0 0 1 .185-.655l-2.34 2.335l.105.364z"></svg:path><svg:path fill="url(#tokenBrandedEjs1)" fill-rule="evenodd" d="M12 20.5a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17m0 .5a8.997 8.997 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEjs0" x1="18.099" x2="5.634" y1="5.901" y2="18.366" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8F3EDA"></svg:stop><svg:stop offset="1" stop-color="#E73E73"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEjs1" x1="21" x2="3.53" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#864BD0"></svg:stop><svg:stop offset="1" stop-color="#E54077"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
