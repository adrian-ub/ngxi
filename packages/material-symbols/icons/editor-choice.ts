import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditorChoiceIcon],svg[material-symbols-editor-choice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 23v-8.225L2.75 9.5L7.375 2h9.25l4.625 7.5L18 14.775V23l-6-2zM8.5 4L5.1 9.5L8.5 15h7l3.4-5.5L15.5 4zm2.45 9.575L7.4 10.05l1.425-1.425l2.125 2.125l4.225-4.25L16.6 7.9z"></svg:path>`,
})
export class MaterialSymbolsEditorChoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
