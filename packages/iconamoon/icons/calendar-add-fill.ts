import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendarAddFillIcon],svg[iconamoon-calendar-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3a1 1 0 1 0-2 0H9a1 1 0 0 0-2 0H4a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a1 1 0 0 0-1-1zM8 6a1 1 0 0 1-1-1H5v2h14V5h-2a1 1 0 1 1-2 0H9a1 1 0 0 1-1 1m4 5a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCalendarAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
