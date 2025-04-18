import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPromptSuggestionIcon],svg[material-symbols-prompt-suggestion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 19l-1.4-1.425L17.175 14H7.5q-1.875 0-3.187-1.312T3 9.5t1.313-3.187T7.5 5H8v2h-.5q-1.05 0-1.775.725T5 9.5t.725 1.775T7.5 12h9.675L13.6 8.4L15 7l6 6z"></svg:path>`,
})
export class MaterialSymbolsPromptSuggestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
