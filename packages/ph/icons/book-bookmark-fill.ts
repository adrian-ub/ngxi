import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBookBookmarkFillIcon],svg[ph-book-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 24H72a32 32 0 0 0-32 32v168a8 8 0 0 0 8 8h144a8 8 0 0 0 0-16H56a16 16 0 0 1 16-16h136a8 8 0 0 0 8-8V32a8 8 0 0 0-8-8m-24 96l-25.61-19.2a4 4 0 0 0-4.8 0L128 120V40h56Z"></svg:path>`,
})
export class PhBookBookmarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
