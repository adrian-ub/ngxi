import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarSamsung2Icon],svg[arcticons-calendar-samsung-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.765 25.333c0-2.963 2.37-5.333 5.136-5.333s5.334 2.37 5.334 5.333c0 1.383-.593 2.766-1.58 3.753C25.48 30.864 18.764 36 18.764 36h10.47"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-4v1a3.5 3.5 0 1 1-7 0v-1h-8v1a3.5 3.5 0 1 1-7 0v-1h-3a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsCalendarSamsung2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
