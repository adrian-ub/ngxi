import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkCheckedIcon],svg[tdesign-bookmark-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.596 2.94L16.94 8.595L13.405 5.06l1.414-1.415l2.121 2.122l4.243-4.243zM4 3h8v2H6v14.057l6-4.286l6 4.286V10h2v12.943l-8-5.714l-8 5.714z"></svg:path>`,
})
export class TdesignBookmarkCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
