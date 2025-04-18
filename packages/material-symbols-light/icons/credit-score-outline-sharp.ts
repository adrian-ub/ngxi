import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCreditScoreOutlineSharpIcon],svg[material-symbols-light-credit-score-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8.808h16V6H4zM3 19V5h18v6.192H4V18h5.273v1zm11.642 1.539l-3.557-3.558l.707-.708l2.85 2.839l5.689-5.689l.708.72zM4 18v-4.558v2.845V6z"></svg:path>`,
})
export class MaterialSymbolsLightCreditScoreOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
