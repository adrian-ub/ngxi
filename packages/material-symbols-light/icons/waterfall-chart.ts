import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWaterfallChartIcon],svg[material-symbols-light-waterfall-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19v-4.712h1.923V19zm4.673-5.577V9.635h1.943v3.788zm4.693-4.654V5h1.942v3.77zM18.058 19V5H20v14z"></svg:path>`,
})
export class MaterialSymbolsLightWaterfallChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
