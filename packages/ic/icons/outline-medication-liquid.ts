import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineMedicationLiquidIcon],svg[ic-outline-medication-liquid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h12v2H3zM2 21h14V6H2zm3-9h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5zm15-6c-1.68 0-3 1.76-3 4c0 1.77.83 3.22 2 3.76V21h2v-7.24c1.17-.54 2-1.99 2-3.76c0-2.24-1.32-4-3-4"></svg:path>`,
})
export class IcOutlineMedicationLiquidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
