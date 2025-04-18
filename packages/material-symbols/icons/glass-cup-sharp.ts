import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGlassCupSharpIcon],svg[material-symbols-glass-cup-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.2 22L3 2h18l-2.2 20zm1.375-6H17.45l1.3-12H5.25z"></svg:path>`,
})
export class MaterialSymbolsGlassCupSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
