import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonCalendar1FillIcon],svg[iconamoon-calendar-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 2a1 1 0 0 1 1 1h3a1 1 0 0 1 1 1v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a1 1 0 0 1 1-1h3a1 1 0 0 1 2 0h6a1 1 0 0 1 1-1M7 5a1 1 0 0 0 2 0h6a1 1 0 1 0 2 0h2v2H5V5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonCalendar1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
