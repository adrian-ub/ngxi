import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter9PlusSharpIcon],svg[material-symbols-filter-9-plus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18V2h16v16zm-4 4V6h2v14h14v2zm8-8h4V6H9v5h3v1h-2zm2-5h-1V8h1zm4.5 4h2v-2h2V9h-2V7h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsFilter9PlusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
