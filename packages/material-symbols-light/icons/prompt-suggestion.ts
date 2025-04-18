import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPromptSuggestionIcon],svg[material-symbols-light-prompt-suggestion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.942 18l-.707-.694l3.844-3.768H7.827q-1.586 0-2.707-1.091T4 9.769t1.12-2.678T7.827 6h.462v1h-.462q-1.166 0-1.996.802T5 9.769t.83 1.967t1.997.802h10.252l-3.844-3.792l.707-.688L20 13.038z"></svg:path>`,
})
export class MaterialSymbolsLightPromptSuggestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
