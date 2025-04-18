import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeftToRightListStarIcon],svg[hugeicons-left-to-right-list-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.5h9M12 12h9m-9 6.5h9M8 5.5H3M4.042 8l2.916-5m0 5L4.042 3M8 18.5H3M4.042 21l2.916-5m0 5l-2.916-5" color="currentColor"></svg:path>`,
})
export class HugeiconsLeftToRightListStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
