import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHealthMetricsSharpIcon],svg[material-symbols-light-health-metrics-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20.846V16H3.154v-3.5h5.565l1.835 2.748h.915l1.677-5.132l1.592 2.384h6.108V16H16v4.846zm2.854-6.961L9.256 11.5H3.154V8H8V3.154h8V8h4.846v3.5h-5.59L13.44 8.758h-.91z"></svg:path>`,
})
export class MaterialSymbolsLightHealthMetricsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
