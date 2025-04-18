import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneUpOutlineSharpIcon],svg[material-symbols-split-scene-up-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-7h2v5h12v-5h2v7zm-2-9v-2h2V2h16v9h2v2zm16 7H6z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneUpOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
