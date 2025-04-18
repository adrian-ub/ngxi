import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarAccountIcon],svg[mdi-calendar-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9c2 0 3 2.42 1.59 3.84c-1.42 1.42-3.84.41-3.84-1.59C9.75 10 10.75 9 12 9m4.5 9h-9v-1.12c0-1.25 2-2.25 4.5-2.25s4.5 1 4.5 2.25M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2h-1V1z"></svg:path>`,
})
export class MdiCalendarAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
