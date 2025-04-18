import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileOffSharpIcon],svg[material-symbols-light-mobile-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.846 22.762L1.008 2.923l.708-.708l19.838 19.839zM6 7.214l1 1V18.5h9.927L18 19.573V22H6zM7.402 5.5L6.034 4.108V2H18v13.689l-1-1V5.5z"></svg:path>`,
})
export class MaterialSymbolsLightMobileOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
