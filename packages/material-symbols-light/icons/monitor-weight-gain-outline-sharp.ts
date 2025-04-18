import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMonitorWeightGainOutlineSharpIcon],svg[material-symbols-light-monitor-weight-gain-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 22.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5 19V5zm-1 1V4h16v9.116h-1V5H5v14h8.116v1zm8.005-8.385q1.091 0 1.85-.764t.76-1.856t-.764-1.85t-1.856-.76q-1.091 0-1.85.764t-.76 1.855t.764 1.852t1.856.76M10 9.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightMonitorWeightGainOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
