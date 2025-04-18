import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScannerSharpIcon],svg[material-symbols-light-scanner-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.985 13L4.846 8.246l.316-.938L20 12.708V19H4v-6zm-7.831 3.5H17.5v-1h-7.346zm-3.923.27h1.538v-1.54H6.231z"></svg:path>`,
})
export class MaterialSymbolsLightScannerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
