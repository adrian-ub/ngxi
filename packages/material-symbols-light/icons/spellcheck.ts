import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpellcheckIcon],svg[material-symbols-light-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.1 21.308l-3.558-3.558l.708-.708l2.85 2.85l5.689-5.688l.707.708zM3.77 16L8.503 3h1.119l4.696 13h-1.146l-1.304-3.8H6.196L4.854 16zm2.78-4.7h5.016L9.05 4.323h-.061z"></svg:path>`,
})
export class MaterialSymbolsLightSpellcheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
