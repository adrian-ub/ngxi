import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMedicalServicesSharpIcon],svg[material-symbols-light-medical-services-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V7h6V4h6v3h6v14zm7-14h4V5h-4zm1.5 7.5v3h1v-3h3v-1h-3v-3h-1v3h-3v1z"></svg:path>`,
})
export class MaterialSymbolsLightMedicalServicesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
