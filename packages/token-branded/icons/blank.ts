import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBlankIcon],svg[token-branded-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBlank0)" d="M11.999 20.999a9 9 0 1 0 0-17.998a9 9 0 0 0 0 17.998M8.062 6.938l8.999 2.531l-1.406 7.874l-9-2.53z"></svg:path><svg:path fill="url(#tokenBrandedBlank1)" d="M11.999 3.001c-1.48 0-2.88.36-4.106.99a9 9 0 0 0 9.91 14.888A9 9 0 0 0 12 3M8.624 5.813l9.562 2.812l-1.407 8.156l-9.561-2.531z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBlank0" x1="6.375" x2="14.811" y1="5.251" y2="20.437" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#337C01"></svg:stop><svg:stop offset=".21" stop-color="#2B6F04"></svg:stop><svg:stop offset=".39" stop-color="#62E700"></svg:stop><svg:stop offset=".53" stop-color="#66E604"></svg:stop><svg:stop offset=".77" stop-color="#142417"></svg:stop><svg:stop offset="1" stop-color="#406925"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBlank1" x1="18.467" x2="6.656" y1="5.813" y2="17.062" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#43C601"></svg:stop><svg:stop offset="1" stop-color="#C7FE02"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
