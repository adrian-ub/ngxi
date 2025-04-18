import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardControlKeyRoundedIcon],svg[material-symbols-keyboard-control-key-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.825L7.1 12.7q-.275.275-.687.288T5.7 12.7q-.275-.275-.275-.7t.275-.7l5.6-5.6q.3-.3.7-.3t.7.3l5.6 5.6q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275z"></svg:path>`,
})
export class MaterialSymbolsKeyboardControlKeyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
