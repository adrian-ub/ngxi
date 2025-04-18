import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSearchCheck2Icon],svg[material-symbols-light-search-check-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.18 12.916l4.747-4.772l-.713-.713l-4.033 4.058l-2.029-2.023l-.713.707zm1.012 4.45q-2.984 0-5.088-2.104T3 10.173t2.104-5.088t5.088-2.104t5.08 2.104t2.094 5.088q0 1.362-.467 2.56q-.466 1.2-1.285 2.148L21 20.273l-.688.727l-5.412-5.406q-.948.839-2.147 1.305q-1.2.467-2.56.467"></svg:path>`,
})
export class MaterialSymbolsLightSearchCheck2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
