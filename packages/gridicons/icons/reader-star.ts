import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsReaderStarIcon],svg[gridicons-reader-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 2.5l2.446 5.335h5.47l-4.582 4.24l1.559 5.425L10 14.687L5.108 17.5l1.559-5.426l-4.584-4.239h5.471z"></svg:path>`,
})
export class GridiconsReaderStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
