import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitSceneLeftOutlineSharpIcon],svg[material-symbols-split-scene-left-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20v-2h5V6h-5V4h7v16zm-4 2v-2H2V4h9V2h2v20zm9-16v12z"></svg:path>`,
})
export class MaterialSymbolsSplitSceneLeftOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
