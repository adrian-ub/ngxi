import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneDownOutlineSharpIcon],svg[material-symbols-light-split-scene-down-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9.116V3h14v6.116h-1V4H6v5.116zM5 21v-8.5H3v-1h18v1h-2V21zM6 4h12z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneDownOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
