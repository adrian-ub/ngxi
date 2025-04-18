import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMedicalCottonSwabIcon],svg[mdi-medical-cotton-swab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h12v2H3zM2 21h14V6H2zm3-9h2.5V9.5h3V12H13v3h-2.5v2.5h-3V15H5zm15-6c-1.7 0-3 1.8-3 4c0 1.8.8 3.2 2 3.8V21h2v-7.2c1.2-.5 2-2 2-3.8c0-2.2-1.3-4-3-4"></svg:path>`,
})
export class MdiMedicalCottonSwabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
