import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLocalCafeOutlineSharpIcon],svg[material-symbols-local-cafe-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21v-2h16v2zm0-4V3h18v7h-4v7zm2-2h10V5H6zm12-7h2V5h-2zM6 15h10z"></svg:path>`,
})
export class MaterialSymbolsLocalCafeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
