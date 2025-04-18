import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScatterPlotIcon],svg[material-symbols-scatter-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21q-1.65 0-2.825-1.175T13 17t1.175-2.825T17 13t2.825 1.175T21 17t-1.175 2.825T17 21M7 18q-1.65 0-2.825-1.175T3 14t1.175-2.825T7 10t2.825 1.175T11 14t-1.175 2.825T7 18m4-8q-1.65 0-2.825-1.175T7 6t1.175-2.825T11 2t2.825 1.175T15 6t-1.175 2.825T11 10"></svg:path>`,
})
export class MaterialSymbolsScatterPlotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
