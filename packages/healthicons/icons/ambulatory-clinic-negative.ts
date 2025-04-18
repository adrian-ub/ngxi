import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAmbulatoryClinicNegativeIcon],svg[healthicons-ambulatory-clinic-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsAmbulatoryClinicNegative0)"><svg:path d="M26 40h8V24h-8zm-5-16h-7v7h7zM20 9h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm24.653 9.985H42.5V12.5L38 15.532V40h3a1 1 0 1 1 0 2h-3v.015H10V42H7a1 1 0 1 1 0-2h3V15.497l-4-3.03V9.984h7.347a6.002 6.002 0 0 1 11.306 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAmbulatoryClinicNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAmbulatoryClinicNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
