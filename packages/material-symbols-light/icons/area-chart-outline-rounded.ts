import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAreaChartOutlineRoundedIcon],svg[material-symbols-light-area-chart-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.054 5.133L16.654 8h2.308q.44 0 .739.299t.299.74V19H4v-8.385q0-.51.444-.726t.848.08l1.939 1.454l4.333-6.083q.269-.373.705-.43q.437-.058.785.223M5 11v3.6L8 17l4-5.5l7 5.45V9h-2.7l-3.9-3.125l-4.95 6.95z"></svg:path>`,
})
export class MaterialSymbolsLightAreaChartOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
