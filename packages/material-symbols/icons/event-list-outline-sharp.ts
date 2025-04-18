import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEventListOutlineSharpIcon],svg[material-symbols-event-list-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v-8h8v8zm2-2h4v-4h-4zM2 18v-2h9v2zm12-7V3h8v8zm2-2h4V5h-4zM2 8V6h9v2zm16-1"></svg:path>`,
})
export class MaterialSymbolsEventListOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
