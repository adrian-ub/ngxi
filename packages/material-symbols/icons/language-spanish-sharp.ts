import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageSpanishSharpIcon],svg[material-symbols-language-spanish-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17v-3h2v1h3v-2h-5V7h7v3h-2V9h-3v2h5v6zM4 7h7v2H6v2h4v2H6v2h5v2H4z"></svg:path>`,
})
export class MaterialSymbolsLanguageSpanishSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
