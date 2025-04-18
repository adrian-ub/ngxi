import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneDownOutlineSharpIcon],svg[material-symbols-split-scene-down-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9V2h16v7h-2V4H6v5zm0 13v-9H2v-2h20v2h-2v9zM6 4h12z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneDownOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
