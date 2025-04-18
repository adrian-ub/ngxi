import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLanguageUsDvorakSharpIcon],svg[material-symbols-language-us-dvorak-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15h3.25V9H6zm-2 2V7h6.25l1 1v8l-1 1zm11.625 0L12.25 7h2l2.375 6.95L19 7h2l-3.375 10z"></svg:path>`,
})
export class MaterialSymbolsLanguageUsDvorakSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
