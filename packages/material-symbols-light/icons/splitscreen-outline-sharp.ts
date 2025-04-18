import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenOutlineSharpIcon],svg[material-symbols-light-splitscreen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.635V4h16v6.635zm1-1h14V5H5zM4 20v-6.615h16V20zm1-1h14v-4.615H5zm0-9.365V5zM5 19v-4.615z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
