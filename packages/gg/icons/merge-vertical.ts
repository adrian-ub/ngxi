import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMergeVerticalIcon],svg[gg-merge-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.976 12L4.733 7.757L3.32 9.172L6.147 12L3.32 14.828l1.414 1.415zM12 19a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1m3.024-7l4.243 4.243l1.414-1.415L17.853 12l2.828-2.828l-1.414-1.415z"></svg:path>`,
})
export class GgMergeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
