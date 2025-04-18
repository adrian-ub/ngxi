import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarSyncOutlineIcon],svg[mdi-calendar-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11v1.5c3.19 0 5.09 3.55 3.33 6.21l-1.09-1.09C21.06 15.96 19.85 14 18 14v1.5l-2.25-2.25zm0 11v-1.5c-3.19 0-5.09-3.55-3.33-6.21l1.09 1.09C14.94 17.04 16.15 19 18 19v-1.5l2.25 2.25zm1-19h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a5.9 5.9 0 0 1-1.5-2H5V9h14v1.59c.71.11 1.39.35 2 .72V5a2 2 0 0 0-2-2m0 4H5V5h14"></svg:path>`,
})
export class MdiCalendarSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
