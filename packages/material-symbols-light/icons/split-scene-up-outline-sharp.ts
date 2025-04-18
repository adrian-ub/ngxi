import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneUpOutlineSharpIcon],svg[material-symbols-light-split-scene-up-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-6.115h1V20h12v-5.115h1V21zm-2-8.5v-1h2V3h14v8.5h2v1zM18 20H6z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneUpOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
