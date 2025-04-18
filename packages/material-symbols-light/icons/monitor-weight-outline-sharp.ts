import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMonitorWeightOutlineSharpIcon],svg[material-symbols-light-monitor-weight-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 11.616q1.091 0 1.85-.765q.76-.764.76-1.856q0-1.091-.764-1.85t-1.856-.76t-1.85.764t-.76 1.856t.764 1.85t1.856.76M10 9.5v-1h1v1zm1.5 0v-1h1v1zm1.5 0v-1h1v1zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLightMonitorWeightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
