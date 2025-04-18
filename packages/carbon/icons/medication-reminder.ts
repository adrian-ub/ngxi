import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMedicationReminderIcon],svg[carbon-medication-reminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M6 14h3v10H6Zm12 14H6v-2h5V12H6v-2h12ZM4 8V4h16v4Z"></svg:path><svg:circle cx="26" cy="16" r="4" fill="currentColor"></svg:circle>`,
})
export class CarbonMedicationReminderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
