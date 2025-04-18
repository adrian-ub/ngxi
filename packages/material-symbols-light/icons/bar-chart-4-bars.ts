import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBarChart4BarsIcon],svg[material-symbols-light-bar-chart-4-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-1h18v1zm1-2.77V12h2v5.23zm4.654 0V7h2v10.23zm4.673 0V10h2v7.23zm4.673 0V4h2v13.23z"></svg:path>`,
})
export class MaterialSymbolsLightBarChart4BarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
