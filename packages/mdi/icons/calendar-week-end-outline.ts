import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarWeekEndOutlineIcon],svg[mdi-calendar-week-end-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4h1V2h2v2h8V2h2v2h1c1.11 0 2 .89 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 16h14V10H5v10M5 8h14V6H5v2m12 4v6h-2v-6h2"></svg:path>`,
})
export class MdiCalendarWeekEndOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
