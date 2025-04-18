import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCommentIcon],svg[gg-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 9H7V7h10zM7 13h10v-2H7z"></svg:path><svg:path fill-rule="evenodd" d="M2 18V2h20v16h-6v4h-2a4 4 0 0 1-4-4zm10-2v2a2 2 0 0 0 2 2v-4h6V4H4v12z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
