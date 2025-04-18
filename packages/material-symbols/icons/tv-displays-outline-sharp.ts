import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvDisplaysOutlineSharpIcon],svg[material-symbols-tv-displays-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16V2h16v2H4v12zm9 6v-2H6V6h17v14h-5v2zm-3-4h13V8H8zm6.5-5"></svg:path>`,
})
export class MaterialSymbolsTvDisplaysOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
