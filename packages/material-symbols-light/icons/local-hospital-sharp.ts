import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalHospitalSharpIcon],svg[material-symbols-light-local-hospital-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 16.5h1.5v-3.75h3.75v-1.5h-3.75V7.5h-1.5v3.75H7.5v1.5h3.75zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightLocalHospitalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
