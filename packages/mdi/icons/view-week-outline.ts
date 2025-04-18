import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewWeekOutlineIcon],svg[mdi-view-week-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1M8 18H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4z"></svg:path>`,
})
export class MdiViewWeekOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
