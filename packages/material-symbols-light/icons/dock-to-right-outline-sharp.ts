import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDockToRightOutlineSharpIcon],svg[material-symbols-light-dock-to-right-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h3V5H5zm4 0h10V5H9zm-1 0H5zm-4 1V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightDockToRightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
