import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatTextOverflowIcon],svg[material-symbols-format-text-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h2v16zm12.45-4.45l-1.4-1.425L16.175 13H8v-2h8.175L15.05 9.875l1.4-1.425L20 12zM12 20v-5h2v5zm0-11V4h2v5z"></svg:path>`,
})
export class MaterialSymbolsFormatTextOverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
