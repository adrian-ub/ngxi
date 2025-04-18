import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwitchesOutlineSharpIcon],svg[material-symbols-switches-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7q1.25 0 2.263.55T11 9h11v6H11q-.725.9-1.737 1.45T7 17m4.9-4H20v-2h-8.1q.05.225.075.5T12 12t-.025.5t-.075.5M7 15q1.25 0 2.125-.875T10 12t-.875-2.125T7 9t-2.125.875T4 12t.875 2.125T7 15"></svg:path>`,
})
export class MaterialSymbolsSwitchesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
