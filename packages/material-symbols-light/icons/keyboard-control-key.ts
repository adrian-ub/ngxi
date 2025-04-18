import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardControlKeyIcon],svg[material-symbols-light-keyboard-control-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 12.689L5.712 12L12 5.712L18.288 12l-.688.689L12 7.114z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardControlKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
