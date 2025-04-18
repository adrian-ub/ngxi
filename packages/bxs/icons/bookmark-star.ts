import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBookmarkStarIcon],svg[bxs-bookmark-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.222L14.667 13l-.89-3.111L16 8l-2.667-.333L12 5l-1.333 2.667L8 8l2.223 1.889L9.333 13z"></svg:path><svg:path fill="currentColor" d="M19 21.723V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v17.723l7-4.571zM8 8l2.667-.333L12 5l1.333 2.667L16 8l-2.223 1.889l.89 3.111L12 11.222L9.333 13l.89-3.111z"></svg:path>`,
})
export class BxsBookmarkStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
