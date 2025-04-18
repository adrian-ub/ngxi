import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMedisafeReminderIcon],svg[arcticons-medisafe-reminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.768 15.836H11.944c-4.349 0-8.145 3.281-8.426 7.62a8.165 8.165 0 0 0 8.146 8.708h2.274a6.04 6.04 0 0 0 5.73-4.12zm12.291 0h-3.13c-2.122 0-3.561 1.039-4.08 2.581l-4.616 13.747h12.103a8.165 8.165 0 0 0 8.146-8.707c-.28-4.34-4.075-7.621-8.423-7.621"></svg:path>`,
})
export class ArcticonsMedisafeReminderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
