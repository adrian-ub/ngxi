import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnSharpRightSharpIcon],svg[material-symbols-light-turn-sharp-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20v-6.884h10v-7.2l-2.1 2.1l-.708-.708L17 4l3.308 3.308l-.708.708l-2.1-2.1v8.2h-10V20z"></svg:path>`,
})
export class MaterialSymbolsLightTurnSharpRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
