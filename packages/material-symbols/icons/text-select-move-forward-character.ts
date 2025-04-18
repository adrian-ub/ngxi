import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextSelectMoveForwardCharacterIcon],svg[material-symbols-text-select-move-forward-character-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zM3 21v-2h2V5H3V3h6v2H7v14h2v2zm14-5l-1.4-1.4l1.575-1.6H10v-2h7.175L15.6 9.4L17 8l4 4z"></svg:path>`,
})
export class MaterialSymbolsTextSelectMoveForwardCharacterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
