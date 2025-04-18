import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsClimateMiniSplitOutlineSharpIcon],svg[material-symbols-climate-mini-split-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12H2V2h20zM4 19v-2q1.25 0 2.125-.875T7 14h2q0 2.075-1.463 3.538T4 19m16 0q-2.075 0-3.537-1.463T15 14h2q0 1.25.875 2.125T20 17zm-9 1v-6h2v6zm9-10H4zM6 10V6h12v4h-2V8H8v2zm-2 0h16V4H4z"></svg:path>`,
})
export class MaterialSymbolsClimateMiniSplitOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
