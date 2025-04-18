import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miCommentIcon],svg[mi-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm14 8.586L11.586 19H5V5h14zM14.414 19L19 14.414V19z"></svg:path>`,
})
export class MiCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
