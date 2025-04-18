import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageFrenchSharpIcon],svg[material-symbols-language-french-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17V7h7v2H6v2h4v2H6v4zm9 0V7h6l1 1v4l-1 1h-.85L20 17h-2.1l-1.875-4H15v4zm2-6h3V9h-3z"></svg:path>`,
})
export class MaterialSymbolsLanguageFrenchSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
