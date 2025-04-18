import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneOutlineSharpIcon],svg[material-symbols-split-scene-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h7v2H4v12h5v2zm9 2V2h2v2h9v16h-9v2zm2-4h7V6h-7zm7 0V6zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
