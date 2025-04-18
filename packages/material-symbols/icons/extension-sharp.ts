import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExtensionSharpIcon],svg[material-symbols-extension-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 21H3v-5.8q1.2 0 2.1-.762T6 12.5t-.9-1.937T3 9.8V4h6q0-1.05.725-1.775T11.5 1.5t1.775.725T14 4h6v6q1.05 0 1.775.725T22.5 12.5t-.725 1.775T20 15v6h-5.8q0-1.25-.787-2.125T11.5 18t-1.912.875T8.8 21"></svg:path>`,
})
export class MaterialSymbolsExtensionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
