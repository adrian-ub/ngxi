import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsElectricalServicesSharpIcon],svg[material-symbols-electrical-services-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15v-2h3v2zm0 4v-2h3v2zm-6 1v-2h-2v-4h2v-2h5v8zm-9-3V9h7V6H4V4h8v7H5v4h4v2z"></svg:path>`,
})
export class MaterialSymbolsElectricalServicesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
