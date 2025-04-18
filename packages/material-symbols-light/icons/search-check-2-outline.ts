import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSearchCheck2OutlineIcon],svg[material-symbols-light-search-check-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.19 16.366q2.58 0 4.377-1.806q1.799-1.805 1.799-4.385T14.564 5.79t-4.375-1.81t-4.381 1.806T4 10.171t1.806 4.387q1.805 1.807 4.384 1.807m-1.01-3.45l4.747-4.77l-.713-.714l-4.033 4.057l-2.029-2.023l-.713.708zm1.012 4.45q-2.984 0-5.088-2.104T3 10.173t2.104-5.088t5.088-2.104t5.08 2.104t2.094 5.088q0 1.359-.467 2.559q-.466 1.2-1.285 2.149L21 20.273l-.688.727l-5.412-5.406q-.948.839-2.149 1.305q-1.2.467-2.559.467m0-7.193"></svg:path>`,
})
export class MaterialSymbolsLightSearchCheck2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
