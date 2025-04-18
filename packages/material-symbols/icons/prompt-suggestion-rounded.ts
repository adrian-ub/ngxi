import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPromptSuggestionRoundedIcon],svg[material-symbols-prompt-suggestion-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.175 14H7.5q-1.875 0-3.187-1.312T3 9.5t1.313-3.187T7.5 5q.425 0 .713.288T8.5 6t-.288.713T7.5 7q-1.05 0-1.775.725T5 9.5t.725 1.775T7.5 12h9.675L14.3 9.1q-.275-.275-.288-.687T14.3 7.7q.275-.275.7-.275t.7.275l4.6 4.6q.3.3.3.7t-.3.7l-4.6 4.6q-.3.3-.7.288t-.7-.313q-.275-.3-.288-.7t.288-.7z"></svg:path>`,
})
export class MaterialSymbolsPromptSuggestionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
