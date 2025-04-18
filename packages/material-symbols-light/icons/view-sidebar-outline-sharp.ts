import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewSidebarOutlineSharpIcon],svg[material-symbols-light-view-sidebar-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v14zm13.692-9.652H20V6h-3.308zm0 4.304H20v-3.304h-3.308zM4 18h11.692V6H4zm12.692 0H20v-3.348h-3.308z"></svg:path>`,
})
export class MaterialSymbolsLightViewSidebarOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
