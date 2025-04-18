import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBottomDrawerOutlineSharpIcon],svg[material-symbols-bottom-drawer-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zM5 5v8.25L6.25 12h11.5L19 13.25V5zm0 14h14v-3l-2-2H7l-2 2zm0 0h14z"></svg:path>`,
})
export class MaterialSymbolsBottomDrawerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
