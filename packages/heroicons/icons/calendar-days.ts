import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCalendarDaysIcon],svg[heroicons-calendar-days-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12zM12 15h.008v.008H12zm0 2.25h.008v.008H12zM9.75 15h.008v.008H9.75zm0 2.25h.008v.008H9.75zM7.5 15h.008v.008H7.5zm0 2.25h.008v.008H7.5zm6.75-4.5h.008v.008h-.008zm0 2.25h.008v.008h-.008zm0 2.25h.008v.008h-.008zm2.25-4.5h.008v.008H16.5zm0 2.25h.008v.008H16.5z"></svg:path>`,
})
export class HeroiconsCalendarDaysIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
