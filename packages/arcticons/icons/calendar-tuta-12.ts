import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarTuta12Icon],svg[arcticons-calendar-tuta-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.863 22.78l4.206-1.98m0 0l-4.403 14.4m8.057-9.6c.815-2.667 3.6-4.8 6.09-4.8s4.147 2.133 3.332 4.8c-.38 1.244-1.294 2.489-2.455 3.378c-2.445 1.6-9.902 6.222-9.902 6.222h9.422"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.27h28.377L42.5 13.893H14.123zm37-28.428H14.123L5.5 5.73h28.377zM5.5 42.27V5.73"></svg:path>`,
})
export class ArcticonsCalendarTuta12Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
