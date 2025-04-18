import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTabletMacOutlineSharpIcon],svg[material-symbols-light-tablet-mac-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22V2h16v20zm1-4.461V21h14v-3.462zm0-1h14V5.5H5zM5 4.5h14V3H5zm0 0V3zm0 13.039V21zm7 2.5q.31 0 .54-.23t.23-.54t-.23-.54T12 18.5t-.54.23t-.23.54t.23.539t.54.23"></svg:path>`,
})
export class MaterialSymbolsLightTabletMacOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
