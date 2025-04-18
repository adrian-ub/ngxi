import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoNotTouchOutlineSharpIcon],svg[material-symbols-light-do-not-touch-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 17.208l-1-1V5h1zm-11-11l-1-1v-.65h1zm3.673 3.673l-1-1V2.558h1zm3.673 1.66h-1V3.558h1zM10.121 20.5h8.958L9 10.421v5.043l-4.411-3.081zm-.53 1L2.719 11.433l.937-.92L8 13.538V9.42L1.887 3.308l.713-.714l19.339 19.339l-.714.713l-1.146-1.146zm4.451-6.042"></svg:path>`,
})
export class MaterialSymbolsLightDoNotTouchOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
