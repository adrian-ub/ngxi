import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStethoscopeIcon],svg[material-symbols-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 22q-2.7 0-4.6-1.9T7 15.5v-.575q-2.15-.35-3.575-2.013T2 9V3h3V2h2v4H5V5H4v4q0 1.65 1.175 2.825T8 13t2.825-1.175T12 9V5h-1v1H9V2h2v1h3v6q0 2.25-1.425 3.913T9 14.925v.575q0 1.875 1.313 3.188T13.5 20t3.188-1.312T18 15.5v-1.675q-.875-.3-1.437-1.075T16 11q0-1.25.875-2.125T19 8t2.125.875T22 11q0 .975-.562 1.75T20 13.825V15.5q0 2.7-1.9 4.6T13.5 22"></svg:path>`,
})
export class MaterialSymbolsStethoscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
