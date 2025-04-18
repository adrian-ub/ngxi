import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRemoveSelectionSharpIcon],svg[material-symbols-light-remove-selection-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17v-2h1v2zm0-4v-2h1v2zm0-4V7h1v2zm3 11v-1h2v1zM7 5V4h2v1zm4 0V4h2v1zm1.192 15l-.708-.708l3.55-3.55l-3.55-3.55l.708-.708l3.55 3.55l3.55-3.55l.708.708l-3.55 3.55l3.55 3.55l-.708.708l-3.55-3.55zM15 5V4h2v1zm4 4V7h1v2zM4 5V4h1v1zm16 0h-1V4h1zM4 20v-1h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightRemoveSelectionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
