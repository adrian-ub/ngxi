import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRoofingSharpIcon],svg[material-symbols-roofing-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 12l10-9l4 3.6V4h3v5.3l3 2.7h-3l-7-6.3L5 12Zm7 8v-6h6v6Zm2-2h2v-2h-2Z"></svg:path>`,
})
export class MaterialSymbolsRoofingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
