import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilter4SharpIcon],svg[material-symbols-light-filter-4-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1zM15 14.5h1v-9h-1v4h-3v-4h-1v5h4z"></svg:path>`,
})
export class MaterialSymbolsLightFilter4SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
