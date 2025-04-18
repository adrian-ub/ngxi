import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUpiPayOutlineSharpIcon],svg[material-symbols-light-upi-pay-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14.692h.885v-2.076h3.5V9.308H11.5zm5.77 0h.884V9.308h-.885zm-4.885-2.961v-1.539H15v1.539zM5.73 14.692h4.385V9.308H9.23v4.5H6.616v-4.5H5.73zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightUpiPayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
