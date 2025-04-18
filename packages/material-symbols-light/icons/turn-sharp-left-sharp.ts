import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnSharpLeftSharpIcon],svg[material-symbols-light-turn-sharp-left-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 20v-5.884h-10v-8.2l-2.1 2.1l-.708-.708L7 4l3.308 3.308l-.708.708l-2.1-2.1v7.2h10V20z"></svg:path>`,
})
export class MaterialSymbolsLightTurnSharpLeftSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
