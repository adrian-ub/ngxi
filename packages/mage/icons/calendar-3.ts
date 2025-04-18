import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCalendar3Icon],svg[mage-calendar-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m0-2v4m-10-4v4m-3.88 9.737h17.76"></svg:path><svg:path d="M12 10.515a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class MageCalendar3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
