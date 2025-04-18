import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageGbEnglishSharpIcon],svg[material-symbols-language-gb-english-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h4v-2h-4zm0-4h4V9h-4zM3 17V7h8v2H5v6h4v-2H7v-2h4v6zm10 0V7h7l1 1v3l-1 1l1 1v3l-1 1z"></svg:path>`,
})
export class MaterialSymbolsLanguageGbEnglishSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
