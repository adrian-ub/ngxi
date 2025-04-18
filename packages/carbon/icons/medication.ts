import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMedicationIcon],svg[carbon-medication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M10 14h3v10h-3Zm12 14H10v-2h5V12h-5v-2h12ZM8 8V4h16v4Z"></svg:path>`,
})
export class CarbonMedicationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
