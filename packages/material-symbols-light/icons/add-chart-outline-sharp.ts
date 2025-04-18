import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddChartOutlineSharpIcon],svg[material-symbols-light-add-chart-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.23 16.5h1v-6h-1zm3.77 0h1v-9h-1zm3.77 0h1v-3h-1zM3.5 20V4h10.923v1H4.5v14h14V9.077h1V20zm14-12V6h-2V5h2V3h1v2h2v1h-2v2zm-6 4"></svg:path>`,
})
export class MaterialSymbolsLightAddChartOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
