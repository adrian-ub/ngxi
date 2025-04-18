import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCalendarDaysIcon],svg[system-uicons-calendar-days-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2m-2 4h16"></svg:path><svg:g fill="currentColor" transform="translate(2 2)"><svg:circle cx="8.5" cy="8.5" r="1"></svg:circle><svg:circle cx="4.5" cy="8.5" r="1"></svg:circle><svg:circle cx="4.5" cy="12.5" r="1"></svg:circle></svg:g></svg:g>`,
})
export class SystemUiconsCalendarDaysIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
