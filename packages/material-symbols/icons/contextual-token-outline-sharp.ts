import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsContextualTokenOutlineSharpIcon],svg[material-symbols-contextual-token-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16h7v-3H6zm9 0h3V8h-3zm-9-5h7V8H6zm-2 7h16V6H4zm-2 2V4h20v16zm2-2V6z"></svg:path>`,
})
export class MaterialSymbolsContextualTokenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
