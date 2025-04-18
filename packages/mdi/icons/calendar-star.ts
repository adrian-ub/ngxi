import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCalendarStarIcon],svg[mdi-calendar-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2h-1V1m-7.12 11H7.27l2.92 2.11l-1.11 3.45L12 15.43l2.92 2.13l-1.12-3.44L16.72 12h-3.6L12 8.56z"></svg:path>`,
})
export class MdiCalendarStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
