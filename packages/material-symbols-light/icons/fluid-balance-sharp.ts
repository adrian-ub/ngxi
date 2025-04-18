import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFluidBalanceSharpIcon],svg[material-symbols-light-fluid-balance-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v1.616H10.846V9.5H6.5v1h4.346v3H6.5v1h4.346q0 1.233.342 2.398q.34 1.166 1.116 2.102zm13.73 2.539v-2.581q-1.5-.177-2.5-1.312q-1-1.134-1-2.646V9h8v6q0 1.512-1 2.646q-1 1.135-2.5 1.312v1.58h3v1zm2.25-7.039h1.25V10h-6v2.5h.75q.702 0 1.328.317t1.069.89q.267.397.702.595t.902.198"></svg:path>`,
})
export class MaterialSymbolsLightFluidBalanceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
