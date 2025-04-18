import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeekendOutlineSharpIcon],svg[material-symbols-weekend-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V9h3V4h16v5h3v11zm6-6h10V9h1V6H6v3h1zm-4 4h18v-7h-2v5H5v-5H3zm9-2"></svg:path>`,
})
export class MaterialSymbolsWeekendOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
