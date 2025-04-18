import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAmbulatoryClinicIcon],svg[healthicons-ambulatory-clinic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 6a6 6 0 0 1 5.653 3.985H42.5V12.5L38 15.532V40h3a1 1 0 1 1 0 2h-3v.015H10V42H7a1 1 0 1 1 0-2h3V15.497l-4-3.03V9.984h7.347A6 6 0 0 1 19 6m1 5V9h-2v2h-2v2h2v2h2v-2h2v-2zm14 13v16h-8V24zm-13 0h-7v7h7z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAmbulatoryClinicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
