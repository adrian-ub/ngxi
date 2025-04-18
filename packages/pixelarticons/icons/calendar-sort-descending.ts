import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarSortDescendingIcon],svg[pixelarticons-calendar-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5H8v2H4V5H2v2H0v12h12V7h-2zM2 9h8v2H2zm0 8v-4h8v4zm18 2h-2v-8h-2V9h2V7h2v2h2v2h-2zm2-8v2h2v-2zm-6 0v2h-2v-2z"></svg:path>`,
})
export class PixelarticonsCalendarSortDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
