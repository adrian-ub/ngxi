import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBookmarkFilledIcon],svg[ix-bookmark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 64v384l-128-85.333L128 448V64z"></svg:path>`,
})
export class IxBookmarkFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
