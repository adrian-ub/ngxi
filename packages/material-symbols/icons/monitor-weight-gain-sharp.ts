import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMonitorWeightGainSharpIcon],svg[material-symbols-monitor-weight-gain-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23v-3h-3v-2h3v-3h2v3h3v2h-3v3zm-6-11q1.25 0 2.125-.875T15 9t-.875-2.125T12 6t-2.125.875T9 9t.875 2.125T12 12m-9 9V3h18v10.35q-.5-.175-1-.262T19 13q-2.5 0-4.25 1.75T13 19q0 .5.088 1t.262 1zm7-11.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsMonitorWeightGainSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
