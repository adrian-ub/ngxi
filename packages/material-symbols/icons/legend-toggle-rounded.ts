import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLegendToggleRoundedIcon],svg[material-symbols-legend-toggle-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17h14q.425 0 .713.288T20 18t-.288.713T19 19H5q-.425 0-.712-.288T4 18t.288-.712T5 17m0-4h14q.425 0 .713.288T20 14t-.288.713T19 15H5q-.425 0-.712-.288T4 14t.288-.712T5 13m-.525-4.65l4.4-2.675q.5-.325 1.1-.3t1.1.375L15 8.55l3.425-2.425q.5-.35 1.038-.088t.537.888q0 .25-.112.475t-.313.35l-3.425 2.425q-.525.375-1.15.375t-1.15-.375L9.925 7.4l-4.4 2.675q-.5.3-1.012.013T4 9.225q0-.275.125-.513t.35-.362"></svg:path>`,
})
export class MaterialSymbolsLegendToggleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
