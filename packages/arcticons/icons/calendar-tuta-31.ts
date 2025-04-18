import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarTuta31Icon],svg[arcticons-calendar-tuta-31-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.393 34.107c.739.833 1.695 1.215 4.106 1.215h.561c1.988 0 4.092-1.612 4.7-3.6h0c.607-1.987-.511-3.599-2.499-3.599m-3.207-5.999c1.25-.83 2.44-1.209 4.849-1.202l.559.003c1.988 0 3.106 1.611 2.499 3.6h0c-.608 1.987-2.712 3.598-4.7 3.598m-2.767 0h2.767m10.566-5.337l4.205-1.98m0 0l-4.402 14.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73"></svg:path>`,
})
export class ArcticonsCalendarTuta31Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
