import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCtxcIcon],svg[token-branded-ctxc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCtxc0)" d="M11.916 4.458c-.118-.276.315-.473.433-.209l8.42 14.777c-.146 0-.292-.05-.433-.073l-7.498-1.519c-.242-.01-.298-.416-.056-.478l2.936-.821a.24.24 0 0 0 .169-.135a.25.25 0 0 0 0-.214L11.916 4.452z"></svg:path><svg:path fill="url(#tokenBrandedCtxc1)" d="M11.482 4.48a.6.6 0 0 1 .074.129c.888 2.565 1.8 5.13 2.683 7.695c.078.214-.22.394-.36.23c-.76-.804-1.48-1.63-2.222-2.44c-.118-.113-.293-.04-.371.078l-7.73 9.242c-.09.095-.168.242-.314.259c-.113 0-.18-.085-.242-.17v-.14c2.83-4.961 5.659-9.917 8.482-14.883"></svg:path><svg:path fill="url(#tokenBrandedCtxc2)" d="M9.12 13.283c.146-.045.338.056.287.236c-.298 1.063-.619 2.12-.928 3.173c-.05.135.073.258.197.264c4.044.827 8.088 1.682 12.133 2.503c.079.011.13.073.191.124v.169l-.113.123H3.72c1.8-2.193 3.595-4.41 5.4-6.592"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCtxc0" x1="2.996" x2="9.272" y1="4.126" y2="23.648" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#307CC0"></svg:stop><svg:stop offset="1" stop-color="#58BFDC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCtxc1" x1="18.486" x2="9.724" y1="7.6" y2="23.568" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#388BC7"></svg:stop><svg:stop offset="1" stop-color="#58BFDC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCtxc2" x1="3.72" x2="20.066" y1="19.875" y2="19.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#ACADAD"></svg:stop><svg:stop offset=".47" stop-color="#DEDFDF"></svg:stop><svg:stop offset="1" stop-color="#B1B2B2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCtxcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
