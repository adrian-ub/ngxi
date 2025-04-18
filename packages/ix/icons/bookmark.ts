import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBookmarkIcon],svg[ix-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 64v384l-128-85.333L128 448V64zm-42.667 42.667H170.667v261.589L256 311.388l85.333 56.868z"></svg:path>`,
})
export class IxBookmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
