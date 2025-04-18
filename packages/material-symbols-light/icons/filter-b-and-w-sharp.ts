import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilterBAndWSharpIcon],svg[material-symbols-light-filter-b-and-w-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H4V4h16zM5.02 19h6.99v-8L19 19.02V5h-6.99v6z"></svg:path>`,
})
export class MaterialSymbolsLightFilterBAndWSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
