import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularNodataOutlineIcon],svg[material-symbols-light-signal-cellular-nodata-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.9 20.789l-.688-.689l2.1-2.1l-2.1-2.1l.688-.688l2.1 2.1l2.1-2.1l.688.688l-2.075 2.1l2.075 2.1l-.688.688l-2.1-2.075zM3 21L21 3.006v9.483q-.238-.103-.479-.169q-.24-.066-.521-.128V5.427L5.421 20h8.04q.085.287.212.527t.29.473zm2.421-1L20 5.427q-2.515 2.515-4.363 4.36t-3.461 3.458L8.983 16.44z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularNodataOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
