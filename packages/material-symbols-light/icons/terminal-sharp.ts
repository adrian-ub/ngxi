import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTerminalSharpIcon],svg[material-symbols-light-terminal-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm1-1h16V8H4zm3.5-1.711l-.689-.689L9.388 13l-2.6-2.6l.713-.688L10.789 13zm5 .211v-1h5v1z"></svg:path>`,
})
export class MaterialSymbolsLightTerminalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
