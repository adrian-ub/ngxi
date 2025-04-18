import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMedicalCrossCircleIcon],svg[tabler-medical-cross-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v8m3.5-6l-7 4m7 0l-7-4"></svg:path>`,
})
export class TablerMedicalCrossCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
