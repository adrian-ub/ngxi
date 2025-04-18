import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMedicationSharpIcon],svg[material-symbols-light-medication-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.385 16.5h1.23V14h2.5v-1.23h-2.5v-2.5h-1.23v2.5h-2.5V14h2.5zM6 19.885v-13h12v13zm.462-14.77v-1h11.077v1z"></svg:path>`,
})
export class MaterialSymbolsLightMedicationSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
