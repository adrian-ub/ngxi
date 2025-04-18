import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneOutlineSharpIcon],svg[material-symbols-light-split-scene-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h6.116v1H4v12h5.116v1zm8.5 2V3h1v2H21v14h-8.5v2zm1-3H20V6h-7.5zm7.5 0V6zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
