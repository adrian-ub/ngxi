import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMedicalServicesSharpIcon],svg[material-symbols-medical-services-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V6h6V2h8v4h6v16zm8-16h4V4h-4zm1 9v3h2v-3h3v-2h-3v-3h-2v3H8v2z"></svg:path>`,
})
export class MaterialSymbolsMedicalServicesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
