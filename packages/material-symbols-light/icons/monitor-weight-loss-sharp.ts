import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMonitorWeightLossSharpIcon],svg[material-symbols-light-monitor-weight-loss-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 18.5h7v1h-7zm-3.495-6.884q1.091 0 1.85-.765q.76-.764.76-1.856q0-1.091-.764-1.85t-1.856-.76t-1.85.764t-.76 1.856t.764 1.85t1.856.76M4 20V4h16v9.235q-.25-.06-.5-.09t-.5-.03q-2.452 0-4.168 1.717T13.116 19q0 .25.03.5t.088.5zm6-10.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightMonitorWeightLossSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
