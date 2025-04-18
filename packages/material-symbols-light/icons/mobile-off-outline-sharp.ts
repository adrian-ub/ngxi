import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileOffOutlineSharpIcon],svg[material-symbols-light-mobile-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.846 22.762L1.008 2.923l.708-.708l19.838 19.839zM6 7.214l1 1V18.5h9.927L18 19.573V22H6zM7 19.5V21h10v-1.5zm.402-14l-.975-1H17V3H6.196l-.162-.161V2H18v13.689l-1-1V5.5zm4.196-1"></svg:path>`,
})
export class MaterialSymbolsLightMobileOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
