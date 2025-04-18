import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileStarFourPointsIcon],svg[mdi-file-star-four-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4c0-1.11.89-2 2-2h8l6 6v12c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H6c-.53 0-1.04-.21-1.41-.59C4.21 21.04 4 20.53 4 20zm9-.5V9h5.5zM12 11l-1.26 2.75L8 15l2.74 1.26L12 19l1.25-2.74L16 15l-2.75-1.25z"></svg:path>`,
})
export class MdiFileStarFourPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
