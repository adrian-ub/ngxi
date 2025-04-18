import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomDrawerOutlineSharpIcon],svg[material-symbols-light-bottom-drawer-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zM5 5v9.096L6.596 12.5h10.808L19 14.096V5zm0 14h14v-3.5l-2-2H7l-2 2zm0 0h14z"></svg:path>`,
})
export class MaterialSymbolsLightBottomDrawerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
