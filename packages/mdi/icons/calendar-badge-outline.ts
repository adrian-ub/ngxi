import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarBadgeOutlineIcon],svg[mdi-calendar-badge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 16c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5M14 19.5c0-.17 0-.33.03-.5H5V9h14v5.03c.17-.03.33-.03.5-.03c.5 0 1 .08 1.5.21V5a2 2 0 0 0-2-2h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9.21c-.13-.5-.21-1-.21-1.5M5 5h14v2H5z"></svg:path>`,
})
export class MdiCalendarBadgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
