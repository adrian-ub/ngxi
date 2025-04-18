import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBookmarkMinusIcon],svg[bxs-bookmark-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a2 2 0 0 0-2 2v18l7-4.848L19 22V4a2 2 0 0 0-2-2m-1 9H8V9h8z"></svg:path>`,
})
export class BxsBookmarkMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
