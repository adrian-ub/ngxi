import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkThinIcon],svg[ph-book-bookmark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H72a28 28 0 0 0-28 28v168a4 4 0 0 0 4 4h144a4 4 0 0 0 0-8H52v-4a20 20 0 0 1 20-20h136a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4m-92 8h56v84l-25.61-19.2a4 4 0 0 0-4.8 0L116 120Zm88 152H72a27.94 27.94 0 0 0-20 8.42V56a20 20 0 0 1 20-20h36v92a4 4 0 0 0 6.4 3.2L144 109l29.61 22.2a4 4 0 0 0 2.4.8a4 4 0 0 0 4-4V36h24Z"></svg:path>`,
})
export class PhBookBookmarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
