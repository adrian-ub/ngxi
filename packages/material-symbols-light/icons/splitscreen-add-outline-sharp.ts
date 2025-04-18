import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenAddOutlineSharpIcon],svg[material-symbols-light-splitscreen-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19v-4.615v.042v-.042zm-1 1v-6.615h16v1H5V19h9.385v1zm0-9.365V4h16v6.635zm1-1h14V5H5zm0 0V5zM19 20h-2.23v-1H19v-2.23h1V19h2.23v1H20v2.23h-1z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
