import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBookmarkAltIcon],svg[bx-bookmark-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2h-12C4.57 2 3 3.57 3 5.5V22l7-3.5l7 3.5v-9h5V5.5C22 3.57 20.43 2 18.5 2M15 18.764l-5-2.5l-5 2.5V5.5C5 4.673 5.673 4 6.5 4h8.852A3.45 3.45 0 0 0 15 5.5zM20 11h-3V5.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5z"></svg:path>`,
})
export class BxBookmarkAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
