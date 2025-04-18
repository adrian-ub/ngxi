import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMedicalInformationSharpIcon],svg[material-symbols-light-medical-information-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.692 17.5h1v-2h2v-1h-2v-2h-1v2h-2v1h2zM13 14.308h5.5v-.885H13zm0 2.384h3.5v-.884H13zM3 21V8h7V3h4v5h7v13zm8-11.23h2V4h-2z"></svg:path>`,
})
export class MaterialSymbolsLightMedicalInformationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
