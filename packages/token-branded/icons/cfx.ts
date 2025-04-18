import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCfxIcon],svg[token-branded-cfx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCfx0)" d="m12.01 3l7.569 7.257l-.014 3.472l-7.589-7.276l-7.531 7.224l-.024-3.401zm0 14.637l3.931-3.766l1.743 1.672L11.991 21l-5.675-5.438l5.693-5.457l1.744 1.672l-3.927 3.766l2.188 2.094z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCfx0" x1="19.579" x2="3.056" y1="17.58" y2="8.814" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#13C77F"></svg:stop><svg:stop offset="1" stop-color="#295DB2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCfxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
