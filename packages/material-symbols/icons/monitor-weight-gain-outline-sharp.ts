import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMonitorWeightGainOutlineSharpIcon],svg[material-symbols-monitor-weight-gain-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 19V5zm-2 2V3h18v10h-2V5H5v14h8v2zm9-9q1.25 0 2.125-.875T15 9t-.875-2.125T12 6t-2.125.875T9 9t.875 2.125T12 12m-2-2.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsMonitorWeightGainOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
