import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScannerSharpIcon],svg[material-symbols-scanner-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.6 12L3.5 6.9L4.2 5L21 11.15V20H3v-8zM10 17h8v-2h-8zm-4 0h2v-2H6z"></svg:path>`,
})
export class MaterialSymbolsScannerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
