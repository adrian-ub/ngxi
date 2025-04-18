import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDockToLeftOutlineSharpIcon],svg[material-symbols-light-dock-to-left-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19h3V5h-3zM5 19h10V5H5zm11 0h3zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightDockToLeftOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
