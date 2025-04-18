import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFilesSharpIcon],svg[material-symbols-light-files-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19v-4.77h9.23V5H21v14zm0-5.058V7h6.942zm2.114-.711l6.117-6.117v6.117z"></svg:path>`,
})
export class MaterialSymbolsLightFilesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
