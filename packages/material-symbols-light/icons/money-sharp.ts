import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoneySharpIcon],svg[material-symbols-light-money-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.27 15.5h3.96v-7h-3.96zm1-1v-5h1.96v5zm-6.732 1H12.5v-7H8.539zm1-1v-5H11.5v5zm-3.769 1h1v-7h-1zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightMoneySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
