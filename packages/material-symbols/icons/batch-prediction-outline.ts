import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatchPredictionOutlineIcon],svg[material-symbols-batch-prediction-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20V10q0-.825.588-1.412T7 8h10q.825 0 1.413.588T19 10v10q0 .825-.587 1.413T17 22zm0-2h10V10H7zm4-1h2v-1h-2zm0-2h2q0-.475.238-.862t.512-.763q.3-.425.525-.913t.225-1.012q0-1.025-.725-1.737T12 11t-1.775.713T9.5 13.45q0 .525.238 1t.512.9q.275.4.513.788T11 17M6 6.5q0-.625.438-1.062T7.5 5h9q.625 0 1.063.438T18 6.5zm1-3q0-.625.438-1.062T8.5 2h7q.625 0 1.063.438T17 3.5zM12 15"></svg:path>`,
})
export class MaterialSymbolsBatchPredictionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
