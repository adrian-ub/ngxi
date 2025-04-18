import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFinanceSharpIcon],svg[material-symbols-finance-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h2v16h16v2zm3-3V9h4v9zm5 0V4h4v14zm5 0v-5h4v5z"></svg:path>`,
})
export class MaterialSymbolsFinanceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
