import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMedicationIcon],svg[material-symbols-light-medication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.385 16.5h1.23V14h2.5v-1.23h-2.5v-2.5h-1.23v2.5h-2.5V14h2.5zm-3.77 3.385q-.666 0-1.14-.475T6 18.27V8.5q0-.666.475-1.14q.474-.476 1.14-.476h8.77q.666 0 1.14.475Q18 7.834 18 8.5v9.77q0 .666-.475 1.14t-1.14.475zM6.463 5.115v-1H17.54v1z"></svg:path>`,
})
export class MaterialSymbolsLightMedicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
