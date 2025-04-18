import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMedicationAlertIcon],svg[carbon-medication-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19h2v5h-2z"></svg:path><svg:path fill="currentColor" d="M23 31a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6 6 0 0 0-6-6"></svg:path><svg:circle cx="23" cy="26" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v18a2 2 0 0 0 2 2h8v-2H6v-2h5V12H6v-2h12v3h2v-3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M9 14v10H6V14ZM4 8V4h16v4Z"></svg:path>`,
})
export class CarbonMedicationAlertIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
