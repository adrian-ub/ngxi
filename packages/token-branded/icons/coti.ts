import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCotiIcon],svg[token-branded-coti-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCoti0)" d="M3.416 10.52c-.287 0-.416.13-.416.389v6.62c0 .287.13.383.416.383c3.178.033 7.06-2.796 10.271-5.012V5.25c-3.178 2.188-7.155 5.304-10.27 5.27"></svg:path><svg:path fill="url(#tokenBrandedCoti1)" d="M20.584 13.513c.287 0 .416-.129.416-.388v-6.62c0-.293-.13-.388-.416-.388c-3.206-.029-7.06 2.795-10.271 5.017v7.616c3.178-2.188 7.154-5.304 10.27-5.237"></svg:path><svg:path fill="#194AAD" d="M13.687 12.832v-4q-1.707 1.125-3.374 2.306v4.05c1.18-.77 2.306-1.591 3.374-2.362z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCoti0" x1="13.658" x2="12.366" y1="17.748" y2="6.215" gradientUnits="userSpaceOnUse"><svg:stop offset=".1" stop-color="#194AAD"></svg:stop><svg:stop offset=".5" stop-color="#248FCB"></svg:stop><svg:stop offset=".8" stop-color="#2BBFDF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCoti1" x1="13.98" x2="12.267" y1="4.505" y2="19.79" gradientUnits="userSpaceOnUse"><svg:stop offset=".1" stop-color="#194AAD"></svg:stop><svg:stop offset=".5" stop-color="#248FCB"></svg:stop><svg:stop offset=".8" stop-color="#2BBFDF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCotiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
