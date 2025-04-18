import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter9PlusOutlineSharpIcon],svg[material-symbols-filter-9-plus-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h4V6H9v5h3v1h-2zm2-5h-1V8h1zm-6 9V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zm6-6V4zm8.5-3h2v-2H20V9h-1.5V7h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsFilter9PlusOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
