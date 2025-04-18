import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBarChartOffIcon],svg[material-symbols-light-bar-chart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V9.808h3V19zm5.5 0v-8.5l3 3V19zm3-8.311l-3-3V5h3zm5.5 5.5l-1.961-1.962v-.035H19zm.833 5.07L2.74 4.168l.713-.713l17.092 17.092z"></svg:path>`,
})
export class MaterialSymbolsLightBarChartOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
