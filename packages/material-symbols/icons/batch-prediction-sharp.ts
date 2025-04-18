import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatchPredictionSharpIcon],svg[material-symbols-batch-prediction-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22V8h14v14zm6-3h2v-1h-2zm0-2h2q0-.475.238-.862t.512-.763q.3-.425.525-.913t.225-1.012q0-1.025-.725-1.737T12 11t-1.775.713T9.5 13.45q0 .525.238 1t.512.9q.275.4.513.788T11 17M6 6.5V5h12v1.5zm1-3V2h10v1.5z"></svg:path>`,
})
export class MaterialSymbolsBatchPredictionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
