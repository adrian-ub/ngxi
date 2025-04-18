import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilter9PlusOutlineSharpIcon],svg[material-symbols-light-filter-9-plus-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.616 13.5H13v-7H9v4h3v2H9.616zM12 9.5h-2v-2h2zM6.5 17V3h14v14zm1-1h12V4h-12zm-4 4V6.616h1V19h12.385v1zm4-4V4zm8.616-3.5h1v-2H19v-1h-1.884v-2h-1v2h-2v1h2z"></svg:path>`,
})
export class MaterialSymbolsLightFilter9PlusOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
