import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAppointmentsSolidIcon],svg[teenyicons-appointments-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2h1.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5v-10A1.5 1.5 0 0 1 1.5 2H3V0h1v2h7V0h1zM6 8H3V7h3zm6-1H9v1h3zm-6 4H3v-1h3zm3 0h3v-1H9z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsAppointmentsSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
