import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsClimateMiniSplitSharpIcon],svg[material-symbols-climate-mini-split-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12V2h20v10h-4V6H6v6zm5 2h2q0 2.075-1.463 3.538T4 19v-2q1.25 0 2.125-.875T7 14m1-2V8h8v4zm3 8v-6h2v6zm4-6h2q0 1.25.875 2.125T20 17v2q-2.075 0-3.537-1.463T15 14"></svg:path>`,
})
export class MaterialSymbolsClimateMiniSplitSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
