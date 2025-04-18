import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCommentIcon],svg[la-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v20h9.586L16 29.414L19.414 26H29V6zm2 2h22v16h-8.414L16 26.586L13.414 24H5zm4 3v2h14v-2zm0 4v2h14v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class LaCommentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
