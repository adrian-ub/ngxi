import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTsvOutlineSharpIcon],svg[material-symbols-tsv-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 15h1.5v-4.5H9V9H5v1.5h1.25zm3.25 0h4v-3.65H11v-.85h2.5V9h-4v3.6H12v.9H9.5zm6.25 0h1.5L19 9h-1.5l-1 3.45l-1-3.45H14zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsTsvOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
