import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanguageSpanishSharpIcon],svg[material-symbols-light-language-spanish-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16.5v-2h1v1h4v-3h-5v-5h6v2h-1v-1h-4v3h5v5zm-8-9h6v1H6v3h4v1H6v3h5v1H5z"></svg:path>`,
})
export class MaterialSymbolsLightLanguageSpanishSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
