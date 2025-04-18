import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsListAltCheckOutlineSharpIcon],svg[material-symbols-list-alt-check-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V5v11.35v-2.125zm-2 2V3h18v10h-2V5H5v14h7v2zm14.35 1l-3.55-3.55l1.425-1.4l2.125 2.125l4.25-4.25L23 16.35zM11 13h6v-2h-6zm0-4h6V7h-6zm-4 4h2v-2H7zm0-4h2V7H7z"></svg:path>`,
})
export class MaterialSymbolsListAltCheckOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
