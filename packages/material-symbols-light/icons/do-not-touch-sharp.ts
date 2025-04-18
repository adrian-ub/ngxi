import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoNotTouchSharpIcon],svg[material-symbols-light-do-not-touch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 17.208l-5.667-5.667h1.013V3.558h1v7.983H19V5h1zM12.673 9.88l-1-1V2.558h1zM9 6.208l-1-1v-.65h1zM9.59 21.5L2.72 11.433l.936-.92L8 13.538V9.42L1.887 3.308l.713-.714l19.339 19.339l-.714.713l-1.146-1.146z"></svg:path>`,
})
export class MaterialSymbolsLightDoNotTouchSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
