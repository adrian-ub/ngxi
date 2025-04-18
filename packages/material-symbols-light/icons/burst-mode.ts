import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBurstModeIcon],svg[material-symbols-light-burst-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 18V6h1v12zM6 18V6h1v12zm5.846 0q-.69 0-1.153-.462t-.462-1.153v-8.77q0-.69.462-1.152T11.846 6h8.77q.69 0 1.152.463t.463 1.153v8.769q0 .69-.463 1.153T20.616 18zm.846-3.23h7.077l-2.138-2.886l-1.9 2.5l-1.4-1.85z"></svg:path>`,
})
export class MaterialSymbolsLightBurstModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
