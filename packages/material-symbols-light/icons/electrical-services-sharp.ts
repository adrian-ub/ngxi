import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightElectricalServicesSharpIcon],svg[material-symbols-light-electrical-services-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 14.5v-1h3v1zm0 4v-1h3v1zm-5 1v-2h-2v-3h2v-2h4v7zm-9-3v-7h7v-4h-6v-1h7v6h-7v5h5v1z"></svg:path>`,
})
export class MaterialSymbolsLightElectricalServicesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
