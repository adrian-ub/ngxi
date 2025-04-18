import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnRightSharpIcon],svg[material-symbols-light-turn-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.48 19V9.5h10.605l-2.1-2.1l.707-.708L20 10l-3.308 3.308l-.707-.708l2.1-2.1H8.48V19z"></svg:path>`,
})
export class MaterialSymbolsLightTurnRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
