import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContrastSquareSharpIcon],svg[material-symbols-light-contrast-square-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h14V5zm1.289-9.827h2v2h.884v-2h2v-.885h-2v-2h-.885v2h-2zm10.698 6.423h-4.385v-.884h4.385z"></svg:path>`,
})
export class MaterialSymbolsLightContrastSquareSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
