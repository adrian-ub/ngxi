import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPointOfSaleSharpIcon],svg[material-symbols-point-of-sale-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V2h14v6zm2-2h10V4H7zM2 22v-3h20v3zm0-4l4-9h12l4 9zm6-2h2v-1H8zm0-2h2v-1H8zm0-2h2v-1H8zm3 4h2v-1h-2zm0-2h2v-1h-2zm0-2h2v-1h-2zm3 4h2v-1h-2zm0-2h2v-1h-2zm0-2h2v-1h-2z"></svg:path>`,
})
export class MaterialSymbolsPointOfSaleSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
