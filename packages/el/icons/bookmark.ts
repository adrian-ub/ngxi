import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elBookmarkIcon],svg[el-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.375 0v1200L600 834.375L965.625 1200V0z"></svg:path>`,
})
export class ElBookmarkIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
