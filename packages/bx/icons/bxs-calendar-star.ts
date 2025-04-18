import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsCalendarStarIcon],svg[bx-bxs-calendar-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-4.588 15l-2.449-1.288L9.514 19l.468-2.728L8 14.342l2.738-.398l1.225-2.48l1.225 2.48l2.738.398l-1.981 1.931l.467 2.727zM19 9H5V7h14v2z" fill="currentColor"></svg:path>`,
})
export class BxBxsCalendarStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
