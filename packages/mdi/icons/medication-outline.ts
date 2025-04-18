import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMedicationOutlineIcon],svg[mdi-medication-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3zM19 8v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2m-2 0H7v11h10zm1-5H6v2h12z"></svg:path>`,
})
export class MdiMedicationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
