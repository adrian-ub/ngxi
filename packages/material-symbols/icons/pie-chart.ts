import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPieChartIcon],svg[material-symbols-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11V2.1q3.575.375 6.038 2.85T21.9 11zm-1.975 10.875q-3.8-.375-6.363-3.2T2.1 12q0-3.875 2.563-6.7t6.362-3.2zm1.975 0v-8.9h8.9q-.35 3.575-2.838 6.063T13 21.875"></svg:path>`,
})
export class MaterialSymbolsPieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
