import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAtmSharpIcon],svg[material-symbols-atm-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.375 15v-4.5h-2.25V9h6v1.5h-2.25V15zM2 15V9h5v6H5.5v-1.5h-2V15zm1.5-3h2v-1.5h-2zm12 3V9H22v6h-1.5v-4.5h-1V14H18v-3.5h-1V15z"></svg:path>`,
})
export class MaterialSymbolsAtmSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
