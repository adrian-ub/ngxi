import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAppPromoSharpIcon],svg[material-symbols-light-app-promo-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.308 11L12 14.308L8.692 11l.708-.708l2.1 2.089V7.692h1v4.689l2.1-2.089zm-5.077 8.654h3.538v-.77h-3.538zM6 22V2h12v20zm1-5.462h10V5.5H7z"></svg:path>`,
})
export class MaterialSymbolsLightAppPromoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
