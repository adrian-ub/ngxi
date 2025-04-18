import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCombineColumnsOutlineSharpIcon],svg[material-symbols-light-combine-columns-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.615 20V4h6v3.289h-1V5h-4v14h4v-2.289h1V20zm8.77 0v-3.288h1V19h4V5h-4v2.289h-1V4h6v16zM11.5 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightCombineColumnsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
