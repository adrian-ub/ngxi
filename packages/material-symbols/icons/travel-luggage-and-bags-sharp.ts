import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTravelLuggageAndBagsSharpIcon],svg[material-symbols-travel-luggage-and-bags-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6h2V4h-2zm1 6q-1.9 0-3.625-.788T5 9.45V6h4V2h6v4h4v3.45q-1.65.975-3.375 1.763T12 12M7 22v-1H5v-9.3q1.4.85 2.888 1.45t3.112.8V15h2v-1.05q1.625-.2 3.113-.8T19 11.7V21h-2v1h-2v-1H9v1z"></svg:path>`,
})
export class MaterialSymbolsTravelLuggageAndBagsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
