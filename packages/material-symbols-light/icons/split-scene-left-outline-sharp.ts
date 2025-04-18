import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneLeftOutlineSharpIcon],svg[material-symbols-light-split-scene-left-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.885 19v-1H20V6h-5.115V5H21v14zM11.5 21v-2H3V5h8.5V3h1v18zM20 6v12z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneLeftOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
