import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInsertTextOutlineIcon],svg[material-symbols-insert-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16v-6H8V8h8v2h-3v6zM1 23v-6h2V7H1V1h6v2h10V1h6v6h-2v10h2v6h-6v-2H7v2zm6-4h10v-2h2V7h-2V5H7v2H5v10h2zM3 5h2V3H3zm16 0h2V3h-2zm0 16h2v-2h-2zM3 21h2v-2H3zm2-2"></svg:path>`,
})
export class MaterialSymbolsInsertTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
