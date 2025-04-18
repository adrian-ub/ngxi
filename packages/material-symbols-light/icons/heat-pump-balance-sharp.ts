import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHeatPumpBalanceSharpIcon],svg[material-symbols-light-heat-pump-balance-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 7.754v9.769h5v-8.77h3v8.77h5v-9.77h3.906l-1.694 1.65l.688.714l2.889-2.863L20.4 4.366l-.688.713l1.675 1.675H16.5v9.769h-3v-8.77h-5v8.77h-3v-8.77zM2 20.6v-8.461h20V20.6z"></svg:path>`,
})
export class MaterialSymbolsLightHeatPumpBalanceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
