import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCreditScoreSharpIcon],svg[material-symbols-light-credit-score-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.642 20.539l-3.557-3.558l.707-.708l2.85 2.839l5.689-5.689l.708.72zM4 11.192h16V8.808H4zM3 19V5h18v6.192h-1.263l-5.095 5.095l-2.844-2.845l-3.538 3.539L9.273 18v1z"></svg:path>`,
})
export class MaterialSymbolsLightCreditScoreSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
