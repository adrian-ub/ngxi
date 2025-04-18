import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCommentIcon],svg[el-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 49.109v854.516h247.266v247.266L632.74 903.625H1200V49.109z"></svg:path>`,
})
export class ElCommentIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
