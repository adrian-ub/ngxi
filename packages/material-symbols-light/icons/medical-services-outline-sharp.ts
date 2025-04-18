import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMedicalServicesOutlineSharpIcon],svg[material-symbols-light-medical-services-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V7h6V4h6v3h6v14zm1-1h16V8H4zm6-13h4V5h-4zM4 20V8zm7.5-5.5v3h1v-3h3v-1h-3v-3h-1v3h-3v1z"></svg:path>`,
})
export class MaterialSymbolsLightMedicalServicesOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
