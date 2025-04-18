import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBookmarkPlusIcon],svg[bxs-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a2 2 0 0 0-2 2v18l7-4.848L19 22V4a2 2 0 0 0-2-2m-1 9h-3v3h-2v-3H8V9h3V6h2v3h3z"></svg:path>`,
})
export class BxsBookmarkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
