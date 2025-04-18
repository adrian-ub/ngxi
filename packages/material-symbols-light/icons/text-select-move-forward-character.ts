import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextSelectMoveForwardCharacterIcon],svg[material-symbols-light-text-select-move-forward-character-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.385 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM15.077 20v-1.23h1.23V20zm0-14.77V4h1.23v1.23zM18.769 20v-1.23H20V20zm0-14.77V4H20v1.23zM4 20v-1h2V5H4V4h5v1H7v14h2v1zm12.712-4.711l-.708-.689l2.075-2.1h-7.31v-1h7.31l-2.075-2.1l.707-.688L20 12z"></svg:path>`,
})
export class MaterialSymbolsLightTextSelectMoveForwardCharacterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
