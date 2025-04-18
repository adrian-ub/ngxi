import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCommentIcon],svg[codicon-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2h-13l-.5.5v9l.5.5H4v2.5l.854.354L7.707 12H14.5l.5-.5v-9zm-.5 9H7.5l-.354.146L5 13.293V11.5l-.5-.5H2V3h12z"></svg:path>`,
})
export class CodiconCommentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
