import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLanguageFrenchSharpIcon],svg[material-symbols-light-language-french-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16.5v-9h6v1H6v3h4v1H6v4zm8 0v-9h4.789L19 8.711v2.77l-1.211 1.211h-.831L19 16.5h-1.08l-2.068-3.808H14V16.5zm1-4.808h3.327L18 11.02V9.173l-.673-.673H14z"></svg:path>`,
})
export class MaterialSymbolsLightLanguageFrenchSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
