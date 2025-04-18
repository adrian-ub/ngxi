import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilter9PlusSharpIcon],svg[material-symbols-light-filter-9-plus-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1zm6.116-6.5H13v-7H9v4h3v2H9.616zM12 9.5h-2v-2h2zm4.116 3h1v-2h2v-1h-2v-2h-1v2h-2v1h2z"></svg:path>`,
})
export class MaterialSymbolsLightFilter9PlusSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
