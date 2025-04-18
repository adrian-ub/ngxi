import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarTuta13Icon],svg[arcticons-calendar-tuta-13-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.86 22.78l4.205-1.98m0 0l-4.402 14.4m5.885-1.215c.74.833 1.696 1.215 4.106 1.215h.562c1.988 0 4.092-1.611 4.7-3.6h0c.607-1.987-.512-3.598-2.5-3.598m-3.206-5.999c1.25-.83 2.44-1.21 4.849-1.203l.559.003c1.987 0 3.106 1.612 2.498 3.6h0c-.607 1.987-2.711 3.599-4.7 3.599m-2.766 0h2.767"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73"></svg:path>`,
})
export class ArcticonsCalendarTuta13Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
