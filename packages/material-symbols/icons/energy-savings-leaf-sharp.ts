import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEnergySavingsLeafSharpIcon],svg[material-symbols-energy-savings-leaf-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.55 16.55l4.875-4.325l-.275-.8l-3.6-.35l2.325-3.25l-.4-.425L8.6 11.75l.275.8l3.6.35l-2.35 3.225zM12 20q-1.4 0-2.637-.437T7.1 18.325l-2.1 2.1L3.575 19l2.1-2.1q-.8-1.025-1.237-2.262T4 12q0-3.35 2.325-5.675T12 4h8v8q0 3.35-2.325 5.675T12 20"></svg:path>`,
})
export class MaterialSymbolsEnergySavingsLeafSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
